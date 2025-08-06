import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		es: "Solrock",
		it: "Solrock",
		pt: "Solrock",
		de: "Sonnfel"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cosmic Spin",
				fr: "Pirouette Cosmique",
				es: "Giro Cósmico",
				it: "Cosmogiro",
				pt: "Giro Cósmico",
				de: "Kosmischer Dreher"
			},
			effect: {
				en: "If Lunatone is on your Bench, this attack does 30 more damage.",
				fr: "Si Séléroc est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si Lunatone está en tu Banca, este ataque hace 30 puntos de daño más.",
				it: "Se Lunatone è nella tua panchina, questo attacco infligge 30 danni in più.",
				pt: "Se Lunatone estiver em seu Banco, esse ataque causará 30 de danos adicionais.",
				de: "Wenn sich Lunastein auf deiner Bank befindet, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
				es: "Rayo Solar",
				it: "Solarraggio",
				pt: "Raio Solar",
				de: "Solarstrahl"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281401,
		tcgplayer: 89432
	}
}

export default card
