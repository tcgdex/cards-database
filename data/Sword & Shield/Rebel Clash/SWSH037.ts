import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon"
	},

	illustrator: "Taira Akitsu",
	rarity: "None",
	category: "Pokemon",
	dexId: [635],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zweilous"
	},

	description: {
		en: "There are a slew of stories about villages that were destroyed by Hydreigon. It bites anything that moves."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dark Squall"
		},

		effect: {
			en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Pitch-Black Fangs"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card