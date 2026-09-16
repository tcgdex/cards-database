import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [103],
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",

	description: {
		en: "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Scale Up"
		},

		effect: {
			en: "If this Pokémon has 6 or more Grass Energy attached, it gets +250 HP."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		cost: ["Grass", "Colorless", "Colorless", "Colorless"],

		damage: 150,

		effect: {
			en: "Heal 50 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 907737,
				tcgplayer: 716218
			}
		}
	],
}

export default card
