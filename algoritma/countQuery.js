function countQuery(input, query) {
    return query.map(q => input.filter(i => i === q).length);
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(countQuery(INPUT, QUERY)); // Output: [1, 0, 2]
