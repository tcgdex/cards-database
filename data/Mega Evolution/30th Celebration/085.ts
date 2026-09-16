import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [745],
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	description: {
		en: "This Lycanroc has an extremely vicious temperament. It will happily sustain injuries for the sake of taking down its opponent."
	},

	attacks: [{
		name: {
			en: "Counter"
		},

		cost: ["Fighting"],

		damage: "10+",

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage."
		}
	}, {
		name: {
			en: "Boulder Crush"
		},

		cost: ["Fighting", "Fighting"],

		damage: 80,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907692,
				tcgplayer: 716481
			}
		}
	],
}

export default card
