import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		en: "Umbreon Star",
		fr: "Groudon"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Dark Ray"
		},

		effect: {
			en: "Once during your turn, when you put Umbreon Star from your hand onto your Bench, you may choose 1 card from your opponent's hand without looking and discard it."
		}
	}],

	attacks: [{
		name: {
			en: "Feint Attack",
			fr: "Volcan Magma"
		},

		effect: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts pour chaque carte Énergie défaussée de cette façon."
		},

		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: ""
	}],

	resistances: [{
		type: "Psychic",
		value: "-30"
	}],

	retreat: 1,

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
