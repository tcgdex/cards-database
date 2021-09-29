import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Kyogre & Groudon LEGEND",
		fr: "Kyogre & Groudon LÉGENDE",
	},

	illustrator: "Shinji Higuchi + Sachiko Eba/樋口真嗣 + 江場左知子",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	types: [
		"Water",
		"Fighting",
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Tidal Wave",
				fr: "Méga raz-de-marée",
			},
			effect: {
				en: "Discard the top 5 cards from your opponent’s deck. This attack does 30 damage times the number of Energy cards you discarded to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez les 5 cartes du dessus du deck de votre adversaire. Cette attaque inflige 30 dégâts, multipliés par le nombre de cartes Énergie que vous avez défaussées, à chacun des Pokémon qui se trouve sur le Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Massive Eruption",
				fr: "Éruption massive",
			},
			effect: {
				en: "Discard the top 5 cards from your deck. This attack does 100 damage times the number of Energy cards you discarded.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: "100×",

		},
		{

			name: {
				fr: "",
			},
			effect: {
				fr: "Placez cette carte sur votre Banc uniquement avec l’autre moitié de Kyogre & Groudon LÉGENDE.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	hp: 150
}

export default card
