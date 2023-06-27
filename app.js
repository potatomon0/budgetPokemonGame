//pkm class (for generating random stats)
class generateStats {
    constructor(lv, hp, atk, spd) {
        this.lv = lv;
        this.hp = hp;
        this.atk = atk;
        this.spd = spd;
    }
    getRandNum(max, min) {
        return Math.floor(Math.Random() * (max - min) + min)
    }
    randLevel() {
        // getRandNum(max,min)
        return 5;
    }
    randHP() {
        return 10;
    }
    randATK() {
        return 3;
    }
    randSPD() {
        return 3;
    }
}
const mudkip = new generateStats();
const totodile = new generateStats();
const magikarp = new generateStats();
//list of possible pkm:
console.log("mudkip: ",mudkip.randLevel())
//object nested in object
let wildPKM = {//water, cave, plain
    water: [
        {
            name: 'Mudkip',
            img: 'https://thumbs.gfycat.com/SoggyGoldenHorsemouse-max-1mb.gif',
            lv: mudkip.randLevel(),
            hp: mudkip.randHP(),
            atk: mudkip.randATK(),
            spd: mudkip.randSPD()
        },
        {
            name: 'Totodile',
            img: 'https://thumbs.gfycat.com/OrganicShamelessAstarte-size_restricted.gif',
            lv: totodile.randLevel(),
            hp: totodile.randHP(),
            atk: totodile.randATK(),
            spd: totodile.randSPD()
        },
        {
            name: 'Magicarp',
            img: 'https://media.tenor.com/PwnLxYiXYtwAAAAM/pokemon-magikarp.gif',
            lv: magikarp.randLevel(),
            hp: magikarp.randHP(),
            atk: magikarp.randATK(),
            spd: magikarp.randSPD()
        }
    ],
    cave: [
        {
            name: 'Zubat',
            img: 'https://thumbs.gfycat.com/CloseLikableGazelle-max-1mb.gif'
        },
        {
            name: 'Clefairy',
            img: 'https://www.shinyhunters.com/images/regular/35.gif'
        },
        {
            name: 'Onix',
            img: 'https://www.shinyhunters.com/images/regular/95.gif'
        }
    ],
    plain: [
        {
            name: 'Ponyta',
            img: 'https://64.media.tumblr.com/a7ae792104530faa274771637acba596/d48710b3e3e100f4-57/s250x250_c1/784ef6645e00f07ccc9f0bb770104c5b4879063b.gifv'
        },
        {
            name: 'Tauros',
            img: 'https://www.shinyhunters.com/images/shiny/1041.gif'
        },
        {
            name: 'Pidgey',
            img: 'https://www.shinyhunters.com/images/regular/16.gif'
        }
    ]
}
//reset button to restart game
//empty out pkmStorage, pkm team, and reset player cash to 500
//encounter button: meet wild pkm
//when clicked, 
const scene = [//water, cave, plain
    'https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg',
    'https://static.wikia.nocookie.net/pokemon/images/a/a2/Stony_Cave.png/revision/latest?cb=20140727075925',
    'https://preview.redd.it/a-very-limited-analysis-of-potential-signs-of-gameplay-v0-xbrpshcb65l81.png?width=640&crop=smart&auto=webp&s=28235b05631f5b9ed4049d3f77dc4a5cb67bfe32'
]
//travel button changes current scene, different scene has different pokemon group
//for now it will be water, cave, plain
let travelCount=0;  
let palletTown = document.querySelector('.topContainer')
const travel = () => {
    if (travelCount === 0) {
        console.log("pallet ",travelCount)
        travelCount++
        palletTown.classList.toggle('topContainer2')
        console.log("pallet ",travelCount)
    } else if (travelCount === 1) {
        console.log("water ",travelCount)
        palletTown.classList.toggle('waterScene')
        travelCount++
        console.log("water ",travelCount)
    } else if (travelCount === 2) {
        console.log("cave ",travelCount)
        palletTown.classList.toggle('caveScene')
        travelCount++
        console.log("cave ",travelCount)
    }else if (travelCount === 3) {
        console.log("plain ",travelCount)
        palletTown.classList.toggle('plainScene')
        travelCount = 0;
        console.log("plain ",travelCount)
    }
}
//if player defeat or catches a pkm, pikachu lv++, stats grow a certian %?
//if player catches pkm, if player.team.length < 6 push to team else dont
//always add new pkm caught to pkmStorage
//if player loses to a battle (other trainer or wild pkm), he/she loses $100 and if it drops below 0 he loses?
//if player wins a battle or caught a pkm, he/she gains $100

//player object
// let playerName = document.getElementsByClassName('.playerName')
let player = {
    name: 'Ash',
    cash: 500,
    team: {
        name: 'Pikachu',
        lv: 5,
        hp: 15,
        atk: 5,
        spd: 5
    },
    pokeball: 10
    //6 pkm total
    //starts with a certain pkm (pikachu?)
}
const displayStats = (foeName,foeLv,foeHp,foeAtk,foeSpd)=>{
    let pkmName = document.querySelector('.pkmName')
    let lv = document.querySelector('.lv')
    let hp = document.querySelector('.hp')
    let atk = document.querySelector('.atk')
    let spd = document.querySelector('.spd')
    pkmName.innerHTML = player.team.name
    lv.innerHTML = `Lv ${player.team.lv}`
    hp.innerHTML = `HP ${player.team.hp}`
    atk.innerHTML = `Atk ${player.team.atk}`
    spd.innerHTML = `Spd ${player.team.spd}`
    let wildPkmName = document.querySelector('.wildPkmName')
    let wildPkmLv = document.querySelector('.wildPkmLv')
    let wildPkmHp = document.querySelector('.wildPkmHp')
    let wildPkmAtk = document.querySelector('.wildPkmAtk')
    let wildPkmSpd = document.querySelector('.wildPkmSpd')
    wildPkmName.innerHTML = foeName
    wildPkmLv.innerHTML = `Lv ${foeLv}`
    wildPkmHp.innerHTML = `HP ${foeHp}`
    wildPkmAtk.innerHTML = `Atk ${foeAtk}`
    wildPkmSpd.innerHTML = `Spd ${foeSpd}`
}
const encounter = () => {
    let leftPkm = document.querySelector('.leftPkm')
    let magikarp = document.querySelector('.magikarp')
    if (travelCount === 0) {
        console.log('here')
        // leftPkm.classList.toggle('leftPkmVisible')
        let ranPkm = Math.floor(Math.random() * (3))
        //get pkm stats
        magikarp.setAttribute('src',wildPKM.water[ranPkm].img)
        displayStats(ranPkm.name,ranPkm.lv,ranPkm.hp,ranPkm.atk,ranPkm.spd)
    }
}
let inventory = document.querySelector('.centerLeft')
let playerName = document.querySelector('.playerName')
let cash = document.querySelector('.cash')
let pokeball = document.querySelector('.pokeball')
let pkm = document.querySelector('.pkm')
playerName.innerHTML = player.name
cash.innerHTML = player.cash
pokeball.innerHTML = player.pokeball
pkm.innerHTML = `${player.team.name} -- HP: ${player.team.hp}`
//pkm storage object
let pkmStorage = [
    //this storage contain more than 6 pkm
    //pkm are stored as objects in an array
]

//shop will never fully deduct all the $ from player, if it is exact amount, shop will take pitty and leave player with $1
    //if purchase cost more than the player current cash, shop says "hey you aint got the $$"
    //if purchase less than the player's current cash, his/her cash amount get deducted
