import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon"
	},

	illustrator: "Iori Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	description: {
		en: "The light of the moon changed Eevee's genetic structure. It lurks in the darkness, waiting for prey."
	},

	attacks: [{
		name: {
			en: "Retaliate"
		},

		cost: ["Darkness"],

		damage: "30+",

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage."
		}
	}, {
		name: {
			en: "Darkness Fang"
		},

		cost: ["Darkness", "Colorless", "Colorless"],

		damage: 100,
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907698,
				tcgplayer: 696679
			}
		}
	],
}

export default card
