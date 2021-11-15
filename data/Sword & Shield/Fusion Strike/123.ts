import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		en: "A discovery was made in the desert where Sigilyph fly. The ruins of what may have been an ancient city were found beneath the sands."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Joust"
		},

		damage: 20,

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Reflect Energy"
		},

		damage: 60,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card