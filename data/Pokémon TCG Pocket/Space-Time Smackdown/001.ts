import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish",
		fr: "Mystherbe",
		es: "Oddish",
		it: "Oddish",
		de: "Myrapla",
		'pt-br': "Oddish",
		ko: "뚜벅쵸"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
		fr: "Il ne bouge que lorsqu'il est exposé aux rayons de la lune.\nIl se déplace alors pour disséminer ses graines.",
		es: "Se mueve al exponerse a la luz de la luna.\nMerodea por la noche para esparcir sus semillas.",
		it: "Inizia a muoversi quando è illuminato dalla luce\nlunare. Di notte se ne va in giro a spargere semi.",
		de: "Wird es vom Mondschein getroffen, bewegt es\nsich. Nachts wandert es weite Wege, um seine\nSamen zu verstreuen.",
		'pt-br': "Ao ser exposto à luz da lua, começa\na se mover. Aventura-se por aí durante\na noite para espalhar suas sementes.",
		ko: "달빛을 받아 움직인다.\n밤중에 씨앗을 여기저기\n뿌리기 위해 돌아다닌다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blot",
			fr: "Pâté",
			es: "Absorción",
			it: "Macchia",
			de: "Klecks",
			'pt-br': "Borrão",
			ko: "조금흡수"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 10 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 10회복."
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
