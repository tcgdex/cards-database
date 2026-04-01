import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [716],
	set: Set,

	name: {
		en: "Xerneas EX",
		fr: "Xerneas-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 170,
	types: ["Fairy"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Break Through",
			fr: "Percée"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 60,
		cost: ["Fairy", "Colorless", "Colorless"]
	}, {
		name: {
			en: "X Blast",
			fr: "Explosion X"
		},

		effect: {
			en: "This Pokémon can't use X Blast during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Explosion X pendant votre prochain tour."
		},

		damage: 140,
		cost: ["Fairy", "Fairy", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	retreat: 2,

	variants: {
		reverse: false,
		normal: false
	},

	thirdParty: {
		cardmarket: 576793
	}
}

export default card
