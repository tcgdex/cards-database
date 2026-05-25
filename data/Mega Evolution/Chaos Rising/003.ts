import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Beedrill ex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [15],
	hp: 310,
	types: ["Grass"],

	evolveFrom: {
		en: "Kakuna"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Bee Rumble"
		},

		cost: ["Grass"],
		damage: 110,

		effect: {
			en: "This attack does 110 damage for each of your Beedrill (including Pokémon ex) in play."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693453
			}
		}
	],
}

export default card