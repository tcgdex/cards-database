import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",

	description: {
		en: "It's highly skilled at tap-dancing. It waves its cane of ice in time with its graceful movements."
	},

	stage: "Stage1",

	name: {
		en: "Galarian Mr. Rime"
	},

	rarity: "None",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Mr. Mime"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Shuffle Dance"
		},

		effect: {
			en: "Once during your turn, you may switch 1 of your opponent's face-down Prize cards with the top card of their deck. (The cards stay face down.)"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Mad Party"
		},

		effect: {
			en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack."
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
