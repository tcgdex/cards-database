import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [888],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	description: {
		en: "Able to cut down anything with a single strike, it became known as the Fairy King's Sword, and it inspired awe in friend and foe alike."
	},

	attacks: [{
		name: {
			en: "Hardened Blade"
		},

		cost: ["Metal"],

		damage: "20+",

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage."
		}
	}, {
		name: {
			en: "Slashing Strike"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 120,

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907713,
				tcgplayer: 716499
			}
		}
	],
}

export default card
