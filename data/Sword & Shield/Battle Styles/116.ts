import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Purugly",
		fr: "Chaffreux"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam"
	},

	attacks: [{
		name: {
			en: "Caturday",
			fr: "Chamedi"
		},

		effect: {
			en: "Draw 3 cards. If you do, this Pokémon is now Asleep.",
			fr: "Piochez 3 cartes. Dans ce cas, ce Pokémon est maintenant Endormi."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Claw Slash",
			fr: "Tranch’Griffe"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card