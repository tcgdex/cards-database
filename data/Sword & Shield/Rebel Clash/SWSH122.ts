import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Flaaffy"
	},

	illustrator: "Pani Kobayashi",
	rarity: "None",
	category: "Pokemon",
	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Mareep"
	},

	description: {
		en: "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dynamotor"
		},

		effect: {
			en: "Once during your turn (before your attack), you may attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Electro Ball"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card