import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Oddish",
		'fr-fr': "Mystherbe",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'de-de': "Myrapla",
		'pt-br': "Oddish",
		'ko-kr': "뚜벅쵸"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",

	dexId: [43],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'de-de': "Ramme",
			'pt-br': "Aríete",
			'ko-kr': "부딪치기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
		'fr-fr': "Il ne bouge que lorsqu'il est exposé aux rayons de la lune.\nIl se déplace alors pour disséminer ses graines.",
		'es-es': "Se mueve al exponerse a la luz de la luna.\nMerodea por la noche para esparcir sus semillas.",
		'it-it': "Inizia a muoversi quando è illuminato dalla luce\nlunare. Di notte se ne va in giro a spargere semi.",
		'de-de': "Wird es vom Mondschein getroffen, bewegt es\nsich. Nachts wandert es weite Wege, um seine\nSamen zu verstreuen.",
		'pt-br': "Ao ser exposto à luz da lua, começa\na se mover. Aventura-se por aí durante\na noite para espalhar suas sementes.",
		'ko-kr': "달빛을 받아 움직인다.\n밤중에 씨앗을 여기저기\n뿌리기 위해 돌아다닌다."
	},

	boosters: ["charizard"]
}

export default card
