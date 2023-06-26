//pkm class (for generating random stats)
class generateStats {
    constructor(level, hp, atk, spd){
        this.level = level;
        this.hp = hp;
        this.atk = atk;
        this.spd = spd;
    }
    getRandNum(max,min){
        return Math.floor(Math.Random()*(max-min)+min)
    }
    randLevel(){
        // getRandNum(max,min)
        return 5;
    }
    randHP(){
        return 10;
    }
    randATK(){
        return 3;
    }
    randSPD(){
        return 3;
    }
}
const mudkip = new generateStats();
const totodile = new generateStats();
const magikarp = new generateStats();
//list of possible pkm:
    //object nested in object
let wildPKM = {
    water:{
        mudkip:{
            name:'Mudkip',
            img:'https://media.tenor.com/-GItNtZpxsEAAAAi/mudkip-standing.gif',
            level:mudkip.randLevel(4,3),
            hp:mudkip.randHP(12,8),
            atk:mudkip.randATK(6,3),
            spd:mudkip.randSPD(6,5)
        },
        totodile:{
            name:'Totodile',
            img:'https://thumbs.gfycat.com/OrganicShamelessAstarte-size_restricted.gif'
        },
        magikarp:{
            name:'Magicarp',
            img:'https://media.tenor.com/PwnLxYiXYtwAAAAM/pokemon-magikarp.gif'
        }
    },
    cave:{
        zubat:{
            name:'Zubat',
            img:'https://thumbs.gfycat.com/CloseLikableGazelle-max-1mb.gif'
        },
        clefairy:{
            name:'Clefairy',
            img:'https://www.shinyhunters.com/images/regular/35.gif'
        },
        omix:{
            name:'Onix',
            img:'https://www.shinyhunters.com/images/regular/95.gif'
        }
    },
    plain:{
        ponyta:{
            name:'Ponyta',
            img:'https://64.media.tumblr.com/a7ae792104530faa274771637acba596/d48710b3e3e100f4-57/s250x250_c1/784ef6645e00f07ccc9f0bb770104c5b4879063b.gifv'
        },
        tauros:{
            name:'Tauros',
            img:'https://www.shinyhunters.com/images/shiny/1041.gif'
        },
        pidgey:{
            name:'Pidgey',
            img:'https://www.shinyhunters.com/images/regular/16.gif'
        }
    }
}
//travel button changes current scene, different scene has different pokemon group
    //for now it will be water, cave, plain
//reset button to restart game
    //empty out pkmStorage, pkm team, and reset player cash to 500
//encounter button: meet wild pkm
    //when clicked, 
const scene = {
    water:'https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg',
    cave:'https://static.wikia.nocookie.net/pokemon/images/a/a2/Stony_Cave.png/revision/latest?cb=20140727075925',
    plain:'https://preview.redd.it/a-very-limited-analysis-of-potential-signs-of-gameplay-v0-xbrpshcb65l81.png?width=640&crop=smart&auto=webp&s=28235b05631f5b9ed4049d3f77dc4a5cb67bfe32'
}
//player object
let player = {
    name: ,
    cash: 500,
    team:['each pokemon is an object(pokemon with their stats) listed in array']
    //6 pkm total
    //starts with a certain pkm (pikachu?)
}
//pkm storage object
let pkmStorage = [
    //this storage contain more than 6 pkm
    //pkm are stored as objects in an array
]
//if player defeat or catches a pkm, pikachu lv++, stats grow a certian %?
    //if player catches pkm, if player.team.length < 6 push to team else dont
    //always add new pkm caught to pkmStorage
//if player loses to a battle (other trainer or wild pkm), he/she loses $100 and if it drops below 0 he loses?
//if player wins a battle or caught a pkm, he/she gains $100

//shop will never fully deduct all the $ from player, if it is exact amount, shop will take pitty and leave player with $1
    //if purchase cost more than the player current cash, shop says "hey you aint got the $$"
    //if purchase less than the player's current cash, his/her cash amount get deducted
