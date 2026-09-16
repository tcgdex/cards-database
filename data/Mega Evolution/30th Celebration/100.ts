import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Yveltal"
	},

	illustrator: "hncl",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [717],
	hp: 120,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "It's said that when its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Life-Locked"
		},

		effect: {
			en: "Your opponent's Active Pokémon can't be healed."
		}
	}],

	attacks: [{
		name: {
			en: "Dark Cutter"
		},

		cost: ["Darkness", "Colorless", "Colorless"],

		damage: 90,
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907707,
				tcgplayer: 716493
			}
		}
	],
}

export default card
