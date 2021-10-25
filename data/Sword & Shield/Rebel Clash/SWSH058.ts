import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Alcremie"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	dexId: [869],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Milcery"
	},

	description: {
		en: "When it trusts a Trainer, it will treat them to berries it's decorated with cream."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Decorate"
		},

		effect: {
			en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Draining Kiss"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card