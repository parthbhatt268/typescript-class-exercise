import Person from '../src/01-basic-class';

describe('test the basic class', () => {
    it('test Basic class', () => {
        const bob = new Person('bob', 24);
        expect(bob.greet()).toBe('Hi I am bob and my age is 24');
    });
});