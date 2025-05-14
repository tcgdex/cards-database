import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		es: "Hitmonlee",
		it: "Hitmonlee",
		de: "Kicklee",
		'pt-br': "Hitmonlee",
		ko: "시라소몬"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
		fr: "Il possède un fantastique sens de l'équilibre, et peut donner\ndes rafales de coups de pied dans toutes les positions.",
		es: "Este Pokémon tiene un sentido del equilibrio\nincreíble. Puede dar patadas desde cualquier posición.",
		it: "Questo straordinario Pokémon ha\nun grande equilibrio. Può tirare\nraffiche di calci da qualsiasi posizione.",
		de: "Dieses Pokémon besitzt einen formidablen\nGleichgewichtssinn. Es kann in jeder Position\npausenlos zutreten.",
		'pt-br': "Este incrível Pokémon possui um ótimo equilíbrio.\nConsegue chutar repetidamente de qualquer posição.",
		ko: "훌륭한 밸런스 감각으로\n어떤 자세라도 연속\n킥을 날리는 대단한 녀석이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Kick",
			fr: "Koud'Pied",
			es: "Patada",
			it: "Calcio",
			de: "Tritt",
			'pt-br': "Chute",
			ko: "킥"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card