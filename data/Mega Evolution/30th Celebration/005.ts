import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Tropius"
	},

	illustrator: "Minahamu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [357],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	description: {
		en: "Delicious fruits grew out from around its neck because it always ate the same kind of fruit."
	},

	attacks: [{
		name: {
			en: "Rally Back"
		},

		cost: ["Grass", "Colorless"],

		damage: "30+",

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 90 more damage."
		}
	}, {
		name: {
			en: "Cutting Wind"
		},

		cost: ["Grass", "Colorless", "Colorless"],

		damage: 90,
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907611,
				tcgplayer: 716439
			}
		}
	],
}

export default card
