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
//each pokemon will be a new instance of class generateSats()
const mudkip = new generateStats();
const totodile = new generateStats();
const magikarp = new generateStats();
//list of possible pkm to encounter in different scenary: object nested in object
let wildPKM = {//water, cave, plain
    water: [
        {
            name: 'Mudkip',
            img: 'https://thumbs.gfycat.com/SoggyGoldenHorsemouse-max-1mb.gif',
            lv: mudkip.randLevel(),
            hp: mudkip.randHP(),
            atk: mudkip.randATK(),
            spd: mudkip.randSPD(),
        },
        {
            name: 'Totodile',
            img: 'https://thumbs.gfycat.com/OrganicShamelessAstarte-size_restricted.gif',
            lv: totodile.randLevel(),
            hp: totodile.randHP(),
            atk: totodile.randATK(),
            spd: totodile.randSPD(),
        },
        {
            name: 'Magicarp',
            img: 'https://media.tenor.com/PwnLxYiXYtwAAAAM/pokemon-magikarp.gif',
            lv: magikarp.randLevel(),
            hp: magikarp.randHP(),
            atk: magikarp.randATK(),
            spd: magikarp.randSPD(),
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
//array of moveset so each pokemon can randomly generate and get two from this array
let waterMoveset = [{skill:'mud shot',power:5},{skill:'bubble',power:2},{skill:'water gun',power:3},{skill:'hyro pump',power:8},{skill:'splash',power:0},{skill:'tackle',power:1}]
const scene = [//water, cave, plain
    'https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg',
    'https://static.wikia.nocookie.net/pokemon/images/a/a2/Stony_Cave.png/revision/latest?cb=20140727075925',
    'https://preview.redd.it/a-very-limited-analysis-of-potential-signs-of-gameplay-v0-xbrpshcb65l81.png?width=640&crop=smart&auto=webp&s=28235b05631f5b9ed4049d3f77dc4a5cb67bfe32'
]
let travelCount=0;//to determine the current scene
let palletTown = document.querySelector('.topContainer')//game starts out with pallettown
//travel button changes current scene, different scene has different pokemon group to encounter
//for now it will be water, cave, plain
const travel = () => {
    if (travelCount === 0){//go from pallet town to water scene
        console.log("pallet ",travelCount)
        travelCount++
        palletTown.classList.toggle('topContainer2')//toggle between pallet town background and water background in css
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
let player = {//player initial setting
    name: 'Ash',
    cash: 500,
    team: {
        name: 'Pikachu',
        lv: 5,
        hp: 15,
        atk: 5,
        spd: 5,
    },
    pokeball: 10
    //6 pkm total
    //starts with a certain pkm (pikachu?)
}
//the skill power calculation is the pokemon atk + the set amount for each skill
let moveset=[{skill:'Thunderbolt', power: player.team.atk + 5},{skill:'Iron Tail', power: player.team.atk+3}]
//html location for player pkm skill 1 & 2, name, hp, atk, spd
let skill1 = document.querySelector('.button1')
let skill2 = document.querySelector('.button2')   
let pkmName = document.querySelector('.pkmName')
let lv = document.querySelector('.lv')
let hp = document.querySelector('.hp')
let atk = document.querySelector('.atk')
let spd = document.querySelector('.spd')
//html location for the wild pkm info
let wildPkmSkill1 = document.querySelector('.wildPkmSkill1')
let wildPkmSkill2 = document.querySelector('.wildPkmSkill2')   
let wildPkmName = document.querySelector('.wildPkmName')
let wildPkmLv = document.querySelector('.wildPkmLv')
let wildPkmHp = document.querySelector('.wildPkmHp')
let wildPkmAtk = document.querySelector('.wildPkmAtk')
let wildPkmSpd = document.querySelector('.wildPkmSpd')
const displayStats = (temp)=>{
    //temp is wildPKM.water[ranPkm] where ranPkm is a number generated in encounter() so the wild pkm is selected randomly
    //display player pkm name, stats and skillset
    pkmName.innerHTML = player.team.name
    lv.innerHTML = `Lv ${player.team.lv}`
    hp.innerHTML = `HP ${player.team.hp}`
    atk.innerHTML = `Atk ${player.team.atk}`
    spd.innerHTML = `Spd ${player.team.spd}`
    skill1.innerHTML = moveset[0].skill
    skill2.innerHTML = moveset[1].skill
    //display wild pkm name, stats, and skillset
    wildPkmName.innerHTML = temp.name
    wildPkmLv.innerHTML = `Lv ${temp.lv}`
    wildPkmHp.innerHTML = `HP ${temp.hp}`
    wildPkmAtk.innerHTML = `Atk ${temp.atk}`
    wildPkmSpd.innerHTML = `Spd ${temp.spd}`
    //get two random numbers to randomly select two skills from the list
    let ranIndex1 = Math.floor(Math.random() * (6))
    let ranIndex2 = Math.floor(Math.random() * (6))
    if(ranIndex1 === ranIndex2){
        //to prevent two skills being the same
        ranIndex2 = Math.floor(Math.random() * (6))
        //display the skills on screen
        wildPkmSkill1.innerHTML = waterMoveset[ranIndex1].skill
        wildPkmSkill2.innerHTML = waterMoveset[ranIndex2].skill
    }else{
        wildPkmSkill1.innerHTML = waterMoveset[ranIndex1].skill
        wildPkmSkill2.innerHTML = waterMoveset[ranIndex2].skill
    }
}
let currentWildPkm;
const encounter = () => {
    //querySelect the html element for displaying player pkm
    let leftPkm = document.querySelector('.leftPkm')
    let wildPkmImg = document.querySelector('.wildPkmImg')
    //each travelCount lead to certain scene, and each scene has its own group of wild pkm
    if (travelCount === 0) {
        //ranPkm represent the index of the wildPkm in each scene
        //ex: wildPkm.water[0] === mudkip
        let ranPkm = Math.floor(Math.random() * (3))
        //toggle to show/hide player pkm and wild pkm to mimic going in battle
        // leftPkm.classList.toggle('leftPkmVisible')
        //change image source to the randomly selected pkm img
        wildPkmImg.setAttribute('src',wildPKM.water[ranPkm].img)
        displayStats(wildPKM.water[ranPkm])
        //toggle for the movesets to show up
        //how can I prevent travel and encounter button being used during a battle?
        //maybe toggle away the buttons during battle scene
        currentWildPkm = wildPKM.water[ranPkm];
    }else if(travelCount===1){
    }
}
//battleLog displays all actions taken by player and wild pkm
let battleLog = document.querySelector('.centerMid')
const thunderbolt = ()=>{
    
    if(currentWildPkm.hp > moveset[0].power){
        currentWildPkm.hp -= moveset[0].power;
        battleLog.innerHTML=`${player.team.name} did ${moveset[0].power} damage to wild ${currentWildPkm.name}`
        wildPkmHp.innerHTML = `HP ${currentWildPkm.hp}`
        //delay then wild pkm attack
        let ranIndex = Math.floor(Math.random() * (2))
        // if(player.team.hp > moveset){
        //     moveset[].power
    }else if(currentWildPkm.hp <= player.team.atk){
        //toggle away pkm, delay then toggle away?
        battleLog.innerHTML = `${player.team.name} did ${player.team.atk} damage to wild ${currentWildPkm.name}. ${currentWildPkm.name} fainted.`
    }
}
const ironTail = ()=>{

}
let inventory = document.querySelector('.centerLeft')
let playerName = document.querySelector('.playerName')
let cash = document.querySelector('.cash')
let pokeball = document.querySelector('.pokeball')
let pkm = document.querySelector('.pkm')
playerName.innerHTML = player.name
cash.innerHTML = `$${player.cash}`
pokeball.innerHTML = `Pokeball: ${player.pokeball}`
pkm.innerHTML = `${player.team.name}`// -- HP: ${player.team.hp}
//pkm storage object
let pkmStorage = [
    //this storage contain more than 6 pkm
    //pkm are stored as objects in an array
]
//shop will never fully deduct all the $ from player, if it is exact amount, shop will take pitty and leave player with $1
    //if purchase cost more than the player current cash, shop says "hey you aint got the $$"
    //if purchase less than the player's current cash, his/her cash amount get deducted
//reset button to restart game
//empty out pkmStorage, pkm team, and reset player cash to 500
//encounter button: meet wild pkm
//when clicked, 