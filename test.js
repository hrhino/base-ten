import test from 'ava';
import Ten from './ten';

test('divisibly correct', t => t.is(Ten / Ten, 1));
test('multiplicatively correct', t => t.is(Ten * 1, Ten));
test('subtractively correct', t => t.is(Ten - Ten, 0));
test('additively correct', t => t.is(Ten + Ten, Ten * 2));
test('commutatively correct', t => t.is(Ten + Ten, Ten + Ten));
test('associatively correct', t => t.is(Ten + (Ten + Ten), (Ten + Ten) + Ten));
