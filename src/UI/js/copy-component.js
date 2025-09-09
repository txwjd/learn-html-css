document.addEventListener('DOMContentLoaded', () => {
  // DOM 선택부
  const uiComponents = document.querySelectorAll('.ui-component');
  uiComponents.forEach(uiComponent => {
    const copyButton = uiComponent.querySelector('.copy-component');
    copyButton?.addEventListener('click', () => {
      // 버튼을 제외한 HTML 추출
      const clone = uiComponent.cloneNode(true);
      const btn = clone.querySelector('.copy-component');
      if (btn) btn.remove();
      const markup = clone.innerHTML.trim();
      // 클립보드 복사
      navigator.clipboard.writeText(markup).then(() => {
        copyButton.textContent = 'complete!';
        setTimeout(() => {
          copyButton.textContent = 'copy';
        }, 1200);
      });
    });
  });
});