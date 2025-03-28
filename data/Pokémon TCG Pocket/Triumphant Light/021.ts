import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Abomasnow"
	},

	illustrator: "nagimiso",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Snover"
	},

	description: {
		en: "It lives a quiet life on mountains that are<br />perpetually covered in snow. It hides itself<br />by whipping up blizzards."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vigor Link"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, attacks used by this Pokémon cost 1 less [Colorless] Energy."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Punch"
		},

		damage: 80,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3
}

export default card
