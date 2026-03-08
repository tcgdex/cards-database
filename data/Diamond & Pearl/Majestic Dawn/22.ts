import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz",
		de: "Panferno"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		392,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mach Punch",
				fr: "Mach Punch",
				de: "Tempohieb"
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Mega Bravo",
				fr: "Mega bravo",
				de: "Mega-Bravo"
			},
			effect: {
				en: "Discard all Fire Energy attached to Infernape. This attack does 40 damage times the amount of Fire Energy you discarded.",
				fr: "Défaussez toutes les Énergies Fire attachées à Simiabraz. Cette attaque inflige 40 dégâts multipliés par le nombre d'Énergies Fire défaussées.",
				de: "Lege alle an Panferno angelegten -Energien auf deinen Ablagestapel. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten -Energien zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	thirdParty: {
		cardmarket: 278071,
		tcgplayer: 86275
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
