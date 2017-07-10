describe('Filters', function () {
  beforeEach(module('app'));

  describe('reverse', function() {
    var reverse;
    beforeEach(inject(function ($filter) {
      reverse = $filter('reverse', {});
    }));

    it('Should reverse a string', function () {
      expect(reverse('rahil')).toBe('lihar');
      expect(reverse('don')).toBe('nod');
      expect(reverse('wck')).toBe('kcw');
    });
  });
});