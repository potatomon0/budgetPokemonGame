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
        // return getRandNum(6,4)
        return 5;
    }
    randHP() {
        // return getRandNum(16,10)
        return 17;
    }
    randATK() {
        // return getRandNum(2,5);
        return 5;
    }
    randSPD() {
        // return getRandNum(6,4)
        return 5;
    }
}
//each pokemon will be a new instance of class generateSats()
const mudkip = new generateStats();
const totodile = new generateStats();
const magikarp = new generateStats();
const rattata = new generateStats();
const starly = new generateStats();
//list of possible pkm to encounter in different scenary: object nested in object
let wildPKM;
const pkmList = () => {
    wildPKM = {//water, cave, plain
        palletTown:[
            {
                name:'Rattata',
                img:'https://forums.pokemmo.com/uploads/monthly_2020_08/Rattata.gif.5c40ea457652532ede40df0ef35f53ec.gif',
                lv: rattata.randLevel(),
                hp: rattata.randHP(),
                atk: rattata.randATK(),
                spd:rattata.randSPD()
        },
        {
            name:'Starly',
            img:"https://www.shinyhunters.com/images/regular/396.gif",
            lv: starly.randLevel(),
            hp:starly.randHP(),
            atk:starly.randATK(),
            spd:starly.randSPD()
        }
        ],
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
}
//array of moveset so each pokemon can randomly generate and get two from this array
let waterMoveset = [{ skill: 'mud shot', power: 5 }, { skill: 'bubble', power: 2 }, { skill: 'water gun', power: 3 }, { skill: 'hyro pump', power: 8 }, { skill: 'splash', power: 0 }, { skill: 'tackle', power: 1 }]
const scene = [//water, cave, plain
    'https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg',
    'https://static.wikia.nocookie.net/pokemon/images/a/a2/Stony_Cave.png/revision/latest?cb=20140727075925',
    'https://preview.redd.it/a-very-limited-analysis-of-potential-signs-of-gameplay-v0-xbrpshcb65l81.png?width=640&crop=smart&auto=webp&s=28235b05631f5b9ed4049d3f77dc4a5cb67bfe32'
]
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
let moveset = [{ skill: 'Thunderbolt', power: player.team.atk + 5 }, { skill: 'Iron Tail', power: player.team.atk + 3 }]
let currentWildPkm;
let newWildPkmHp;
let leftPkmHidden = document.querySelector('.leftPkmHidden')
let rightPkmHidden = document.querySelector('.rightPkmHidden')
let bottomRightHidden = document.querySelector('.bottomRightHidden')
let wildPkmImg = document.querySelector('.wildPkmImg')
let bottomLeft = document.querySelector('.bottomLeft')
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
let battleLog = document.querySelector('.text')
let inventory = document.querySelector('.centerLeft')
let playerName = document.querySelector('.playerName')
let cash = document.querySelector('.cash')
let pokeball = document.querySelector('.pokeball')
let pkm = document.querySelector('.pkm')
let confirmButtonHidden = document.querySelector('.confirmButtonHidden')
let textbox = document.querySelector('.text')
let pikaImg = document.querySelector('.pikachu')
playerName.innerHTML = player.name
cash.innerHTML = `$${player.cash}`
pokeball.innerHTML = `Pokeball: ${player.pokeball}`
pkm.innerHTML = `${player.team.name}`// -- HP: ${player.team.hp}
let backgroundScene = document.querySelector('.topContainer')//game starts out with pallettown
//pkm storage object
let pkmStorage = [
    //this storage contain more than 6 pkm
    //pkm are stored as objects in an array
]
//travel button changes current scene, different scene has different pokemon group to encounter
//for now it will be water, cave, plain
let travelCount=0;//to determine the current scene
const travel = () => {
    console.log(travelCount)
    if (travelCount === 3) {//go from pallet town to water scene
        backgroundScene.setAttribute('class','topContainer')
        travelCount=0
    } else if (travelCount === 0) {
        backgroundScene.setAttribute('class', 'waterScene')
        travelCount++
    } else if (travelCount === 1) {
        backgroundScene.classList.toggle('caveScene')
        travelCount++
    } else if (travelCount === 2) {
        backgroundScene.classList.toggle('plainScene')
        travelCount++
    }
    console.log(travelCount)
}
//html location for player pkm skill 1 & 2, name, hp, atk, spd
const displayStats = (temp) => {
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
    if (ranIndex1 === ranIndex2) {
        //to prevent two skills being the same
        ranIndex2 = Math.floor(Math.random() * (6))
        //display the skills on screen
        wildPkmSkill1.innerHTML = waterMoveset[ranIndex1].skill
        wildPkmSkill2.innerHTML = waterMoveset[ranIndex2].skill
    } else {
        wildPkmSkill1.innerHTML = waterMoveset[ranIndex1].skill
        wildPkmSkill2.innerHTML = waterMoveset[ranIndex2].skill
    }
}
//encounter is always a step behind in travelCount
const encounter = () => {
    pkmList()
    //querySelect the html element for displaying player pkm
    //each travelCount lead to certain scene, and each scene has its own group of wild pkm
    // wildPkmHp.innerHTML = newWildPkmHp
    if(travelCount === 0 || travelCount ===3) {
        // pkmList()
        //ranPkm represent the index of the wildPkm in each scene
        //ex: wildPkm.water[0] === mudkip
        let ranPkm = Math.floor(Math.random() * (3))
        //toggle to show/hide player pkm and wild pkm to mimic going in battle
        leftPkmHidden.setAttribute('class', 'leftPkm')
        rightPkmHidden.setAttribute('class', 'rightPkm')
        bottomRightHidden.setAttribute('class', 'bottomRight')
        bottomLeft.setAttribute('class', 'bottomLeftHidden')
        //change image source to the randomly selected pkm img
        wildPkmImg.setAttribute('src', wildPKM.palletTown[ranPkm].img)
        displayStats(wildPKM.palletTown[ranPkm])
        //toggle for the movesets to show up
        //how can I prevent travel and encounter button being used during a battle?
        //maybe toggle away the buttons during battle scene
        currentWildPkm = wildPKM.palletTown[ranPkm];
        newWildPkmHp = currentWildPkm.hp
    } else if (travelCount === 1) {
        // pkmList()
        //ranPkm represent the index of the wildPkm in each scene
        //ex: wildPkm.water[0] === mudkip
        let ranPkm = Math.floor(Math.random() * (3))
        //toggle to show/hide player pkm and wild pkm to mimic going in battle
        leftPkmHidden.setAttribute('class', 'leftPkm')
        rightPkmHidden.setAttribute('class', 'rightPkm')
        bottomRightHidden.setAttribute('class', 'bottomRight')
        bottomLeft.setAttribute('class', 'bottomLeftHidden')
        //change image source to the randomly selected pkm img
        wildPkmImg.setAttribute('src', wildPKM.water[ranPkm].img)
        displayStats(wildPKM.water[ranPkm])
        //toggle for the movesets to show up
        //how can I prevent travel and encounter button being used during a battle?
        //maybe toggle away the buttons during battle scene
        currentWildPkm = wildPKM.water[ranPkm];
        newWildPkmHp = currentWildPkm.hp
    }
}
const atkNoDefeat = (skillNum) => {
    newWildPkmHp -= moveset[skillNum].power;
    battleLog.innerHTML = `${player.team.name} used ${moveset[skillNum].skill} and did ${moveset[skillNum].power} damage to wild ${currentWildPkm.name}<br>`
    wildPkmHp.innerHTML = `HP ${newWildPkmHp}`
    //delay then wild pkm attack
    //select from the wild pkm's moveset and attack back
    let ranIndex = Math.floor(Math.random() * (2))
    if (player.team.hp > waterMoveset[ranIndex].power) {
        player.team.hp -= waterMoveset[ranIndex].power
        battleLog.append(`${currentWildPkm.name} used ${waterMoveset[ranIndex].skill} and did ${waterMoveset[ranIndex].power} damage`)
        hp.innerHTML = `Hp ${player.team.hp}`
    } else if (player.team.hp < waterMoveset[ranIndex].power) {
        player.team.hp = 0;
        hp.innerHTML = `Hp ${player.team.hp}`
        battleLog.innerHTML = 'Blackout! Something went through your pockets and took your wealth. Go home and start again.'
        setTimeout(resetButton, 2000)
    }
}
const atkDefeat = (skillNum) => {
    battleLog.innerHTML = `${player.team.name} used ${moveset[skillNum].skill} and did ${moveset[skillNum].power} damage to wild ${currentWildPkm.name}. ${currentWildPkm.name} fainted and dropped something shiny ($100)`
    player.cash += 100
    cash.innerHTML = `$${player.cash}`
    currentWildPkm.hp = 0
    wildPkmHp.innerHTML = `HP ${currentWildPkm.hp}`
    confirmButtonHidden.setAttribute('class', 'confirmButton')
    bottomRightHidden.setAttribute('class', 'bottomRightHidden')
}
//battleLog displays all actions taken by player and wild pkm
const thunderbolt = () => {

    //if wild pkm can survive the hit, decrease wild pkm hp
    if (newWildPkmHp > moveset[0].power) {
        atkNoDefeat(0)
        //if wild pkm hp drops to 0 or below, wild pkm faint and battle over
    } else if (newWildPkmHp <= moveset[0].power) {
        //toggle away pkm, delay then toggle away?
        atkDefeat(0);
    }
}
const pikaOriginal = ()=>{
    pikaImg.setAttribute('src','https://i.gifer.com/4bXB.gif')
}
const ironTail = () => {
    pikaImg.setAttribute('src','https://qph.cf2.quoracdn.net/main-qimg-b243742784689af953e207013a611db0')
    // pikaImg.setAttribute('class','')
    setTimeout(pikaOriginal,1800)
    //if wild pkm can survive the hit, decrease wild pkm hp
    if (newWildPkmHp > moveset[1].power) {
        atkNoDefeat(1)
        //if wild pkm hp drops to 0 or below, wild pkm faint and battle over
    } else if (newWildPkmHp <= moveset[1].power) {
        //toggle away pkm, delay then toggle away?
        atkDefeat(1);
    }
}
const confirm = () => {
    //confirm button
    // let bottomRight = document.querySelector('.bottomRight')
    leftPkmHidden.setAttribute('class', 'leftPkmHidden')
    rightPkmHidden.setAttribute('class', 'rightPkmHidden')
    bottomLeft.setAttribute('class', 'bottomLeft')
    bottomRightHidden.setAttribute('class', 'bottomRightHidden')
    confirmButtonHidden.setAttribute('class', 'confirmButtonHidden')
    wildPkmHp.innerHTML = currentWildPkm.hp
    textbox.innerHTML = ""
}
const resetButton = () => {
    console.log('reset')
    player.cash = 500;
    cash.innerHTML = `$${player.cash}`;
    player.pokeball = 10;
    pkmStorage = [];
    player.team.hp = 15;
    battleLog.innerHTML = '';
    confirmButtonHidden.setAttribute('class', 'confirmButtonHidden')
    bottomLeft.setAttribute('class', 'bottomLeft')
    leftPkmHidden.setAttribute('class', 'leftPkmHidden')
    rightPkmHidden.setAttribute('class', 'rightPkmHidden')
}