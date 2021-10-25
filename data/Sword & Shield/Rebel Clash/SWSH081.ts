import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Polteageist"
	},

	illustrator: "Misa Tsutsui",
	rarity: "None",
	category: "Pokemon",
	dexId: [855],
	hp: 60,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sinistea"
	},

	description: {
		en: "This species lives in antique teapots. Most pots are forgeries, but on rare occasions, an authentic work is found."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tea Break"
		},

		effect: {
			en: "You must discard a Pokémon that has the Mad Party attack from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mad Party"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card