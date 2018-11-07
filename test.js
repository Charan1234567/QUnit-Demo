QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our res function with  sets of inputs', function (assert) {
    assert.equal(res(2, 2), 1, 'just two numbers');
    assert.equal(res(2,0), "not defined", 'denominator as 0');
    assert.equal(res(0,2), 0, 'numerator as 0');
    assert.equal(res("a","b"), 0, 'testing with strings');
});
