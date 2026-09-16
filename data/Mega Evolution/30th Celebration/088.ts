import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [30],
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

	description: {
		en: "The horn on its head has atrophied. It's thought that this happens so Nidorina's children won't get poked while their mother is feeding them."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Share Happiness"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Heal 30 damage from 1 of your Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Bite"
		},

		cost: ["Colorless", "Colorless"],

		damage: 30,
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907695,
				tcgplayer: 716484
			}
		}
	],
}

export default card
