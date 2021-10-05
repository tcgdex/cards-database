import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Misa Tsutsui",
	category: "Pokemon",

	description: {
		en: "This species lives in antique teapots. Most pots are forgeries, but on rare occasions, an authentic work is found."
	},

	stage: "Stage1",

	name: {
		en: "Polteageist"
	},

	rarity: "None",
	dexId: [855],
	hp: 60,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sinistea"
	},

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

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card