import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886495,
				tcgplayer: 693469
			}
		},
	],

	name: {
		en: "Cobalion ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [638],
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Metal Road"
		},

		effect: {
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may use this Ability. Move any amount of Metal Energy from your other Pokémon to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Power Tackle"
		},

		cost: ["Metal", "Metal", "Colorless"],
		damage: 200,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card