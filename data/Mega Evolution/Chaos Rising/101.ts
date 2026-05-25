import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Floette ex"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [670],
	hp: 250,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Gentle Light"
		},

		cost: ["Psychic"],

		effect: {
			en: "Heal 30 damage from each Pokémon (both yours and your opponent's)."
		}
	}, {
		name: {
			en: "Eternity Bloom"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: 200,

		effect: {
			en: "Search your deck for up to 4 Basic Psychic Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693512
			}
		}
	],
}

export default card