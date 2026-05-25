import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886449,
				tcgplayer: 693492
			}
		},
	],

	name: {
		en: "Garbodor"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [569],
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Trubbish"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Garbage Downer"
		},

		effect: {
			en: "If your opponent's Active Pokémon has any Pokémon Tools attached to it, its attacks do 20 less damage."
		}
	}],

	attacks: [{
		name: {
			en: "Sludge Bomb"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",
}

export default card