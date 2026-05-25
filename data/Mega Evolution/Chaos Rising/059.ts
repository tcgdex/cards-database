import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886451,
				tcgplayer: 693455
			}
		},
	],

	name: {
		en: "Beldum"
	},

	illustrator: "toi8",
	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		cost: ["Metal"],
		damage: 10
	}, {
		name: {
			en: "Beam"
		},

		cost: ["Metal", "Colorless"],
		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card