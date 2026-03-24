import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		en: "Donphan",
		fr: "Donphan"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Exoskeleton",
			fr: "Exosquelette"
		},

		effect: {
			en: "Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tout dégât infligé à Donphan par des attaques est réduit de 20 (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			en: "Earthquake",
			fr: "Séisme"
		},

		effect: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Heavy Impact",
			fr: "Gros impact"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	resistances: [{
		type: "Lightning",
		value: "-20"
	}],

	retreat: 4,
	suffix: "Prime",

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576789
	}
}

export default card
