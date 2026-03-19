import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ultra Energy Source",
				fr: "Source d'énergie ultra",
				de: "Ultra Energiequelle"
			},
			effect: {
				en: "Does 10 damage times the amount of basic Energy attached to all of the Active Pokémon (both yours and your opponent's).",
				fr: "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées aux Pokémon Actifs (les vôtres et ceux de votre adversaire).",
				de: "Fügt für jede Basis-Energie, die an allen Aktiven Pokémon (deine und die des Gegners) angelegt ist, 10 Schadenspunkte zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275811,
		tcgplayer: 84736
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
