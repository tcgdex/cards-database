import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
		de: "Camaub"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 60,

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
				en: "Flare Bonus",
				fr: "Bonus d’intimidation",
				de: "Flammenbonus"
			},
			effect: {
				en: "Discard a Fire Energy card from your hand. Then, draw 3 cards.",
				fr: "Défaussez une carte Énergie Fire de votre main. Ensuite, piochez 3 cartes.",
				de: "Lege 1 -Energiekarte von deiner Hand auf deinen Ablagestapel. Ziehe danach 3 Karten."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
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
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The flaming magma it stores in the hump on its back is the source of its tremendous power."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279191
	}
}

export default card
