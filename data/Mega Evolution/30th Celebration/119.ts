import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [143],
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "Its stomach's digestive juices can dissolve any kind of poison. Eating things off the ground doesn't bother it at all."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Good Sleep"
		},

		effect: {
			en: "If this Pokémon remains Asleep during Pokémon Checkup, heal all damage from this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Collapse"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		damage: 130,

		effect: {
			en: "This Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907726,
				tcgplayer: 716508
			}
		}
	],
}

export default card
