import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886413,
				tcgplayer: 693490
			}
		},
	],

	name: {
		en: "Frogadier"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [657],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Froakie"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Summoning Jutsu"
		},

		cost: ["Water"],

		effect: {
			en: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Aqua Edge"
		},

		cost: ["Water", "Water"],
		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card