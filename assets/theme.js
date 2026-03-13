document.addEventListener('DOMContentLoaded', function() {
  // Move menu overlay to body so it covers full viewport (avoids header transform/stacking context)
  var overlay = document.getElementById('header-menu-overlay');
  if (overlay && overlay.parentElement && overlay.parentElement.tagName !== 'BODY') {
    document.body.appendChild(overlay);
  }

  // Header scroll - opacity/blur changes when scrolled
  var header = document.getElementById('off-duty-header');
  if (header) {
    var threshold = 30;
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Full-screen menu: open/close + scroll lock
  var toggle = document.querySelector('[data-menu-toggle]');
  var closeBtns = document.querySelectorAll('[data-menu-close]');

  function openMenu() {
    if (overlay) {
      overlay.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-open');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (overlay) {
      overlay.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-open');
    }
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  closeBtns.forEach(function(btn) {
    btn.addEventListener('click', closeMenu);
  });

  window.addEventListener('beforeunload', function() {
    document.body.style.overflow = '';
  });

  // Collection sidebar drawer (mobile)
  var drawerTrigger = document.querySelector('[data-collection-drawer-trigger]');
  var drawerSidebar = document.getElementById('collection-sidebar');
  var drawerBackdrop = document.getElementById('collection-sidebar-backdrop');
  var drawerCloseEls = document.querySelectorAll('[data-collection-drawer-close]');

  function openDrawer() {
    if (drawerSidebar) drawerSidebar.classList.add('is-open');
    if (drawerBackdrop) { drawerBackdrop.classList.add('is-visible'); drawerBackdrop.setAttribute('aria-hidden', 'false'); }
    if (drawerTrigger) drawerTrigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawerSidebar) drawerSidebar.classList.remove('is-open');
    if (drawerBackdrop) { drawerBackdrop.classList.remove('is-visible'); drawerBackdrop.setAttribute('aria-hidden', 'true'); }
    if (drawerTrigger) drawerTrigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (drawerTrigger) drawerTrigger.addEventListener('click', openDrawer);
  drawerCloseEls.forEach(function(el) { el.addEventListener('click', closeDrawer); });

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) closeDrawer();
  });

  // Collapsible Shop By group (mobile)
  var collapsibleToggles = document.querySelectorAll('[data-collapsible-toggle]');
  collapsibleToggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
    });
  });

  // Affiliate / Ambassador form: combine Social + Message into contact[body]
  var affiliateForm = document.querySelector('[data-affiliate-form]');
  if (affiliateForm) {
    var bodyInput = affiliateForm.querySelector('[data-affiliate-body]');
    var messageField = affiliateForm.querySelector('[data-affiliate-message]');
    var socialInputs = affiliateForm.querySelectorAll('[data-affiliate-social]');
    affiliateForm.addEventListener('submit', function() {
      if (!bodyInput || !messageField) return;
      var parts = [];
      var socialLines = [];
      var labels = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', other: 'Other' };
      socialInputs.forEach(function(input) {
        var val = (input.value || '').trim();
        if (val) {
          var key = (input.dataset.affiliateSocial || '').toLowerCase();
          var label = labels[key] || key;
          socialLines.push(label + ': ' + val);
        }
      });
      if (socialLines.length) parts.push('SOCIAL MEDIA HANDLES\n' + socialLines.join('\n'));
      parts.push('MESSAGE\n' + (messageField.value || '').trim());
      bodyInput.value = parts.join('\n\n');
    });
  }
});
