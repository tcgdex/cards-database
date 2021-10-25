import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "Shibuzoh.",
	rarity: "None",
	category: "Pokemon",
	dexId: [573],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Minccino"
	},

	description: {
		en: "Its body secrets oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Make Do"
		},

		effect: {
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energy Assist"
		},

		effect: {
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon."
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card