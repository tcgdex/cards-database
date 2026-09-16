import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia"
	},

	illustrator: "Kazuki Minami",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [249],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It sleeps in a deep-sea trench. If it flaps its wings, it is said to cause a 40-day storm."
	},

	attacks: [{
		name: {
			en: "Elemental Blast"
		},

		cost: ["Fire", "Water", "Lightning"],

		damage: 250,

		effect: {
			en: "Discard a Fire Energy, a Water Energy, and a Lightning Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907728,
				tcgplayer: 716510
			}
		}
	],
}

export default card
