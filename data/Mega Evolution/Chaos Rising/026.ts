import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886418,
				tcgplayer: 693494
			}
		},
	],

	name: {
		en: "Golisopod"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [768],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Wimpod"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Critical Slash"
		},

		cost: ["Water"],
		damage: 30,

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
		}
	}, {
		name: {
			en: "Boundless Power"
		},

		cost: ["Colorless", "Colorless", "Colorless"],
		damage: 150,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card