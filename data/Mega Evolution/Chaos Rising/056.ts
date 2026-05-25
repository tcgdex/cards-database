import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886448,
				tcgplayer: 693557
			}
		},
	],

	name: {
		en: "Trubbish"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [568],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Acid Spray"
		},

		cost: ["Darkness"],
		damage: 10,

		effect: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card