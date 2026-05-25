import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886424,
				tcgplayer: 693475
			}
		},
	],

	name: {
		en: "Deoxys"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic Spear"
		},

		cost: ["Psychic", "Psychic", "Psychic"],
		damage: 120,

		effect: {
			en: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack also does 120 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card