import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ferroseed"
	},

	illustrator: "OKUBO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [597],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		cost: ["Metal", "Metal"],
		damage: 40
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
				tcgplayer: 693485
			}
		}
	],
}

export default card