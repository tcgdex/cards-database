import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Golurk ex",
		fr: "Méga-Golemastoc-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [623],
	hp: 350,
	types: ["Psychic"],

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem"
	},

	stage: "Stage1",
	suffix: "ex",

	abilities: [{
		type: "Ability",

		name: {
			en: "Restricted Activation",
			fr: "Activation Restreinte"
		},

		effect: {
			en: "This Pokémon can't use attacks unless you have 10 or more cards in your hand.",
			fr: "Ce Pokémon ne peut utiliser d'attaques que si vous avez au moins 10 cartes en main."
		}
	}],

	attacks: [{
		name: {
			en: "Goliath's Punch",
			fr: "Poing de Goliath"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts."
		},

		damage: 300
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
