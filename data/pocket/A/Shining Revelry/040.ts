import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'es-es': "Hitmonlee",
		'it-it': "Hitmonlee",
		'de-de': "Kicklee",
		'pt-br': "Hitmonlee",
		'ko-kr': "시라소몬"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [106],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
		'fr-fr': "Il possède un fantastique sens de l'équilibre, et peut donner\ndes rafales de coups de pied dans toutes les positions.",
		'es-es': "Este Pokémon tiene un sentido del equilibrio\nincreíble. Puede dar patadas desde cualquier posición.",
		'it-it': "Questo straordinario Pokémon ha\nun grande equilibrio. Può tirare\nraffiche di calci da qualsiasi posizione.",
		'de-de': "Dieses Pokémon besitzt einen formidablen\nGleichgewichtssinn. Es kann in jeder Position\npausenlos zutreten.",
		'pt-br': "Este incrível Pokémon possui um ótimo equilíbrio.\nConsegue chutar repetidamente de qualquer posição.",
		'ko-kr': "훌륭한 밸런스 감각으로\n어떤 자세라도 연속\n킥을 날리는 대단한 녀석이다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Kick",
			'fr-fr': "Koud'Pied",
			'es-es': "Patada",
			'it-it': "Calcio",
			'de-de': "Tritt",
			'pt-br': "Chute",
			'ko-kr': "킥"
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