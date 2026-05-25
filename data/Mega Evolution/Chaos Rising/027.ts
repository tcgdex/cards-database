import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886419,
				tcgplayer: 693507
			}
		},
	],

	name: {
		en: "Mareep"
	},

	illustrator: "UKUMO uiti",
	rarity: "Common",
	category: "Pokemon",
	dexId: [179],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Wave"
		},

		cost: ["Lightning", "Colorless"],
		damage: 20,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
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