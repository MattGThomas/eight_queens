const _ = require('lodash')

function calculate_errors(squares) {
    const lines = [
        [0, 1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20, 21, 22, 23],
        [24, 25, 26, 27, 28, 29, 30, 31],
        [32, 33, 34, 35, 36, 37, 38, 39],
        [40, 41, 42, 43, 44, 45, 46, 47],
        [48, 49, 50, 51, 52, 53, 54, 55],
        [56, 57, 58, 59, 60, 61, 62, 63]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d, e, f, g, h] = lines[i];
        

        // this is the start of the diagonal logic
        const diagonal_one = [
            squares[8],
            squares[1]
        ]
        const diagonal_two = [
            squares[16],
            squares[9],
            squares[2]
        ]
        const diagonal_three = [
            squares[24],
            squares[17],
            squares[10],
            squares[3]
        ]
        const diagonal_four = [
            squares[32],
            squares[25],
            squares[18],
            squares[11],
            squares[4]
        ]
        const diagonal_five = [
            squares[40],
            squares[33],
            squares[26],
            squares[19],
            squares[12],
            squares[5]
        ]
        const diagonal_six = [
            squares[48],
            squares[41],
            squares[34],
            squares[27],
            squares[20],
            squares[13],
            squares[6]
        ]
        const diagonal_seven = [
            squares[56],
            squares[49],
            squares[42],
            squares[35],
            squares[28],
            squares[21],
            squares[14],
            squares[7],
        ]
        const diagonal_eight = [
            squares[57],
            squares[50],
            squares[43],
            squares[36],
            squares[29],
            squares[22],
            squares[15],
        ]
        const diagonal_nine = [
            squares[58],
            squares[51],
            squares[44],
            squares[37],
            squares[30],
            squares[23],
        ]
        const diagonal_ten = [
            squares[59],
            squares[52],
            squares[45],
            squares[38],
            squares[31],
        ]
        const diagonal_eleven = [
            squares[60],
            squares[53],
            squares[46],
            squares[39],
        ]
        const diagonal_twelve = [
            squares[61],
            squares[54],
            squares[47],
        ]
        const diagonal_thirteen = [
            squares[62],
            squares[55],
        ]
        const diagonal_fourteen = [
            squares[48],
            squares[57],
        ]
        const diagonal_fifteen = [
            squares[40],
            squares[49],
            squares[58]
        ]
        const diagonal_sixteen = [
            squares[32],
            squares[41],
            squares[50],
            squares[59],
        ]
        const diagonal_seventeen = [
            squares[24],
            squares[33],
            squares[42],
            squares[51],
            squares[60],
        ]
        const diagonal_eighteen = [
            squares[16],
            squares[25],
            squares[34],
            squares[43],
            squares[52],
            squares[61],
        ]
        const diagonal_nineteen = [
            squares[8],
            squares[17],
            squares[26],
            squares[35],
            squares[44],
            squares[53],
            squares[62],
        ]
        const diagonal_twenty = [
            squares[0],
            squares[9],
            squares[18],
            squares[27],
            squares[36],
            squares[45],
            squares[54],
            squares[63],
        ]
        const diagonal_twentyone = [
            squares[1],
            squares[10],
            squares[19],
            squares[28],
            squares[37],
            squares[46],
            squares[55],
        ]
        const diagonal_twentytwo = [
            squares[2],
            squares[11],
            squares[20],
            squares[29],
            squares[38],
            squares[47],
        ]
        const diagonal_twentythree = [
            squares[3],
            squares[12],
            squares[21],
            squares[30],
            squares[39],
        ]
        const diagonal_twentyfour = [
            squares[4],
            squares[13],
            squares[22],
            squares[31],
        ]
        const diagonal_twentyfive = [
            squares[5],
            squares[14],
            squares[23],
        ]
        const diagonal_twentysix = [
            squares[6],
            squares[15]
        ]
        const diagonal_one_filter = diagonal_one.filter(x => x === 'X')
        const diagonal_two_filter = diagonal_two.filter(x => x === 'X')
        const diagonal_three_filter = diagonal_three.filter(x => x === 'X')
        const diagonal_four_filter = diagonal_four.filter(x => x === 'X')
        const diagonal_five_filter = diagonal_five.filter(x => x === 'X')
        const diagonal_six_filter = diagonal_six.filter(x => x === 'X')
        const diagonal_seven_filter = diagonal_seven.filter(x => x === 'X')
        const diagonal_eight_filter = diagonal_eight.filter(x => x === 'X')
        const diagonal_nine_filter = diagonal_nine.filter(x => x === 'X')
        const diagonal_ten_filter = diagonal_ten.filter(x => x === 'X')
        const diagonal_eleven_filter = diagonal_eleven.filter(x => x === 'X')
        const diagonal_twelve_filter = diagonal_twelve.filter(x => x === 'X')
        const diagonal_thirteen_filter = diagonal_thirteen.filter(x => x === 'X')
        const diagonal_fourteen_filter = diagonal_fourteen.filter(x => x === 'X')
        const diagonal_fifteen_filter = diagonal_fifteen.filter(x => x === 'X')
        const diagonal_sixteen_filter = diagonal_sixteen.filter(x => x === 'X')
        const diagonal_seventeen_filter = diagonal_seventeen.filter(x => x === 'X')
        const diagonal_eighteen_filter = diagonal_eighteen.filter(x => x === 'X')
        const diagonal_nineteen_filter = diagonal_nineteen.filter(x => x === 'X')
        const diagonal_twenty_filter = diagonal_twenty.filter(x => x === 'X')
        const diagonal_twentyone_filter = diagonal_twentyone.filter(x => x === 'X')
        const diagonal_twentytwo_filter = diagonal_twentytwo.filter(x => x === 'X')
        const diagonal_twentythree_filter = diagonal_twentythree.filter(x => x === 'X')
        const diagonal_twentyfour_filter = diagonal_twentyfour.filter(x => x === 'X')
        const diagonal_twentyfive_filter = diagonal_twentyfive.filter(x => x === 'X')
        const diagonal_twentysix_filter = diagonal_twentysix.filter(x => x === 'X')

        // this is the start of the row logic
        const row_one = [
            squares[0],
            squares[1],
            squares[2],
            squares[3],
            squares[4],
            squares[5],
            squares[6],
            squares[7]
        ]
        const row_two = [
            squares[8],
            squares[9],
            squares[10],
            squares[11],
            squares[12],
            squares[13],
            squares[14],
            squares[15]
        ]
        const row_three = [
            squares[16],
            squares[17],
            squares[18],
            squares[19],
            squares[20],
            squares[21],
            squares[22],
            squares[23]
        ]
        const row_four = [
            squares[24],
            squares[25],
            squares[26],
            squares[27],
            squares[28],
            squares[29],
            squares[30],
            squares[31]
        ]
        const row_five = [
            squares[32],
            squares[33],
            squares[34],
            squares[35],
            squares[36],
            squares[37],
            squares[38],
            squares[39]
        ]
        const row_six = [
            squares[40],
            squares[41],
            squares[42],
            squares[43],
            squares[44],
            squares[45],
            squares[46],
            squares[47]
        ]
        const row_seven = [
            squares[48],
            squares[49],
            squares[50],
            squares[51],
            squares[52],
            squares[53],
            squares[54],
            squares[55]
        ]
        const row_eight = [
            squares[56],
            squares[57],
            squares[58],
            squares[59],
            squares[60],
            squares[61],
            squares[62],
            squares[63]
        ]
        const row_one_filter = row_one.filter(x => x === 'X')
        const row_two_filter = row_two.filter(x => x === 'X')
        const row_three_filter = row_three.filter(x => x === 'X')
        const row_four_filter = row_four.filter(x => x === 'X')
        const row_five_filter = row_five.filter(x => x === 'X')
        const row_six_filter = row_six.filter(x => x === 'X')
        const row_seven_filter = row_seven.filter(x => x === 'X')
        const row_eight_filter = row_eight.filter(x => x === 'X')

        // this is the start of the column logic
        const column_a = [
            squares[0], 
            squares[8],
            squares[16],
            squares[24],
            squares[32],
            squares[40],
            squares[48],
            squares[56]
        ]
        const column_b = [
            squares[1], 
            squares[9],
            squares[17],
            squares[25],
            squares[33],
            squares[41],
            squares[49],
            squares[57]
        ]
        const column_c = [
            squares[2], 
            squares[10],
            squares[18],
            squares[26],
            squares[34],
            squares[42],
            squares[50],
            squares[58]
        ]
        const column_d = [
            squares[3], 
            squares[11],
            squares[19],
            squares[27],
            squares[35],
            squares[43],
            squares[51],
            squares[59]
        ]
        const column_e = [
            squares[4], 
            squares[12],
            squares[20],
            squares[28],
            squares[36],
            squares[44],
            squares[52],
            squares[60]
        ]
        const column_f = [
            squares[5], 
            squares[13],
            squares[21],
            squares[29],
            squares[37],
            squares[45],
            squares[53],
            squares[61]
        ]
        const column_g = [
            squares[6], 
            squares[14],
            squares[22],
            squares[30],
            squares[38],
            squares[46],
            squares[54],
            squares[62]
        ]
        const column_h = [
            squares[7], 
            squares[15],
            squares[23],
            squares[31],
            squares[39],
            squares[47],
            squares[55],
            squares[63]
        ]
        const column_a_filter = column_a.filter(x => x === 'X')
        const column_b_filter = column_b.filter(x => x === 'X')
        const column_c_filter = column_c.filter(x => x === 'X')
        const column_d_filter = column_d.filter(x => x === 'X')
        const column_e_filter = column_e.filter(x => x === 'X')
        const column_f_filter = column_f.filter(x => x === 'X')
        const column_g_filter = column_g.filter(x => x === 'X')
        const column_h_filter = column_h.filter(x => x === 'X')





        if (diagonal_one_filter.length > 1 || 
            diagonal_two_filter.length > 1 ||
            diagonal_three_filter.length > 1 ||
            diagonal_four_filter.length > 1 ||
            diagonal_five_filter.length > 1 ||
            diagonal_six_filter.length > 1 ||
            diagonal_seven_filter.length > 1 ||
            diagonal_eight_filter.length > 1 ||
            diagonal_nine_filter.length > 1 ||
            diagonal_ten_filter.length > 1 ||
            diagonal_eleven_filter.length > 1 ||
            diagonal_twelve_filter.length > 1 ||
            diagonal_thirteen_filter.length > 1 ||
            diagonal_fourteen_filter.length > 1 ||
            diagonal_fifteen_filter.length > 1 ||
            diagonal_sixteen_filter.length > 1 ||
            diagonal_seventeen_filter.length > 1 ||
            diagonal_eighteen_filter.length > 1 ||
            diagonal_nineteen_filter.length > 1 ||
            diagonal_twenty_filter.length > 1 ||
            diagonal_twentyone_filter.length > 1 ||
            diagonal_twentytwo_filter.length > 1 ||
            diagonal_twentythree_filter.length > 1 ||
            diagonal_twentyfour_filter.length > 1 ||
            diagonal_twentyfive_filter.length > 1 ||
            diagonal_twentysix_filter.length > 1
            ) {
            return (
                <div>
                    you may not place multiple X's in any diagonal, please try again
                </div>
            )
        }

        if (row_one_filter.length > 1 ||
            row_two_filter.length > 1 ||
            row_three_filter.length > 1 ||
            row_four_filter.length > 1 ||
            row_five_filter.length > 1 ||
            row_six_filter.length > 1 ||
            row_seven_filter.length > 1 ||
            row_eight_filter.length > 1 
            ) {
            return (
                <div>
                    you may not place multiple X's in any row, please try again
                </div>
            )
        }

        if (column_a_filter.length > 1 || 
            column_b_filter.length > 1 || 
            column_c_filter.length > 1 || 
            column_d_filter.length > 1 || 
            column_e_filter.length > 1 || 
            column_f_filter.length > 1 || 
            column_g_filter.length > 1 || 
            column_h_filter.length > 1 ) {
            return (
                <div>
                    you may not place multiple X's in any column, please try again
                </div>
            )
        }

    }
    return null;
}

export default calculate_errors