import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Granbull",
		fr: "Granbull",
		es: "Granbull",
		it: "Granbull",
		pt: "Granbull",
		de: "Granbull"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "Although it's popular with young people, Granbull is timid and sensitive, so it's totally incompetent as a watchdog."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dig Up"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put up to 2 Pokémon Tool cards from your discard pile into your hand."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bite"
		},

		damage: 90
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card