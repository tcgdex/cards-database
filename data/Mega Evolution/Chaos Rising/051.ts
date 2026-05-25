import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886443,
				tcgplayer: 693470
			}
		},
	],

	name: {
		en: "Crobat"
	},

	illustrator: "IKEDA Saki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [169],
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Nighttime Maneuvers"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Search your deck for a card. Shuffle your deck, then put that card on top of it."
		}
	}],

	attacks: [{
		name: {
			en: "Poison Sound Wave"
		},

		cost: ["Darkness"],
		damage: 80,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned."
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

	retreat: 1,
	regulationMark: "J",
}

export default card