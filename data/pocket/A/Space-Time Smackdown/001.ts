import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

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

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [43],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
		'fr-fr': "Il ne bouge que lorsqu'il est exposé aux rayons de la lune.\nIl se déplace alors pour disséminer ses graines.",
		'es-es': "Se mueve al exponerse a la luz de la luna.\nMerodea por la noche para esparcir sus semillas.",
		'it-it': "Inizia a muoversi quando è illuminato dalla luce\nlunare. Di notte se ne va in giro a spargere semi.",
		'de-de': "Wird es vom Mondschein getroffen, bewegt es\nsich. Nachts wandert es weite Wege, um seine\nSamen zu verstreuen.",
		'pt-br': "Ao ser exposto à luz da lua, começa\na se mover. Aventura-se por aí durante\na noite para espalhar suas sementes.",
		'ko-kr': "달빛을 받아 움직인다.\n밤중에 씨앗을 여기저기\n뿌리기 위해 돌아다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blot",
			'fr-fr': "Pâté",
			'es-es': "Absorción",
			'it-it': "Macchia",
			'de-de': "Klecks",
			'pt-br': "Borrão",
			'ko-kr': "조금흡수"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
			'fr-fr': "Soignez 10 dégâts de ce Pokémon.",
			'es-es': "Cura 10 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 10 danni.",
			'de-de': "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 10회복."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
