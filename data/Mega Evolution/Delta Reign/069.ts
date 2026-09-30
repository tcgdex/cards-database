import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Malamar ex",
		fr: "Méga-Sepiatroce-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [687],
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop"
	},

	stage: "Stage1",
	suffix: "ex",

	attacks: [{
		name: {
			en: "Psychic Marionette",
			fr: "Marionnette Psy"
		},

		cost: ["Darkness", "Darkness"],

		effect: {
			en: "This attack does 70 damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chacun des Pokémon de Banc de votre adversaire."
		},

		damage: "70×"
	}, {
		name: {
			en: "Eerie Wave",
			fr: "Vague Étrange"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
