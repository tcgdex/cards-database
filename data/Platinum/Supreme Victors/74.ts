import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draw In",
				fr: "Attirer",
				de: "Ansaugen"
			},
			effect: {
				en: "Search your discard pile for up to 2 Fire Energy cards and attach them to Numel.",
				fr: "Cherchez dans votre pile de défausse jusqu'à 2 cartes Énergie Fire et attachez-les à Chamallot.",
				de: "Durchsuche deinen Ablagestapel nach bis zu 2 -Energiekarten und lege sie an Camaub an."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
				de: "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278765
	}
}

export default card
