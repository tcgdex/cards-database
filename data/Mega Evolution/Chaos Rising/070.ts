import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886462,
				tcgplayer: 693529
			}
		},
	],

	name: {
		en: "Patrat"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [504],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Watchful Eyes"
		},

		effect: {
			en: "If this Pokémon is in play, you and your opponent can't move damage counters to another Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Bite"
		},

		cost: ["Colorless"],
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card