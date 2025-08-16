import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "M Gardevoir EX",
		fr: "M-Gardevoir EX",
		es: "M-Gardevoir EX",
		it: "M Gardevoir EX",
		pt: "M-Gardevoir EX",
		de: "M-Guardevoir EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 210,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Gardevoir-EX",
		fr: "Gardevoir-EX",
		es: "Gardevoir-EX",
		it: "Gardevoir-EX",
		pt: "Gardevoir-EX",
		de: "Guardevoir-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brilliant Arrow",
				fr: "Flèche Éclatante",
				es: "Flecha Brillante",
				it: "Freccia Brillante",
				pt: "Seta Brilhante",
				de: "Glänzender Pfeil"
			},
			effect: {
				en: "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Fairy attachées à tous vos Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Fairy unida a todos tus Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni Energia Fairy assegnata ai tuoi Pokémon.",
				pt: "Esse ataque causa 30 de danos vezes a quantidade de Energia Fairy ligada a todos os seus Pokémon.",
				de: "Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der an all deinen Pokémon angelegten Fairy-Energien zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 96004
	}
}

export default card
