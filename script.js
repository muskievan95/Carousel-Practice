function carousel(container) {
  const slider = containter.querySelctor('.slider');
  const items = slider.querySelectorAll('.item');
  const { css, value } = window.popmotion;


  function carousel(container) {
    const sliderVisableWidth = slider.offsetWidth;
    const totalItemsWidth = getTotalItemsWidth(items);
  }

  function getTotalItemsWidth(items) {
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    return right - left;
    const maxXOffset = 0;
    const minXOffset = -(totalItemsWidth - sliderVisibleWidth);
    const sliderRenderer = css(slider);
    const sliderX = value(0, x => sliderRenderer.set('x', x));
    sliderX.set(-100);
  }
}


carousel(document.querySeletor('.container'));