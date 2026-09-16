import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Hydreigon"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [635],
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	description: {
		en: "It's said that Hydreigon grew ferocious because people in times long past loathed it, considering it to be evil incarnate and attacking it relentlessly."
	},

	attacks: [{
		name: {
			en: "Three-Headed Bite"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip 3 coins. For each heads, discard an Energy from your opponent's Active Pokémon."
		}
	}, {
		name: {
			en: "Pitch-Black Fangs"
		},

		cost: ["Darkness", "Colorless"],

		damage: 140,
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
				cardmarket: 907706,
				tcgplayer: 716492
			}
		}
	],
}

export default card
