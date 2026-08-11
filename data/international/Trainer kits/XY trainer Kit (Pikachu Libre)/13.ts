import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [310],
	set: Set,

	name: {
		en: "Manectric",
		fr: "Élecsprint",
		es: "Manectric",
		it: "Manectric",
		pt: "Manectric",
		de: "Voltenso"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "match",

	description: {
		en: "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts."
	},

	attacks: [{
		name: {
			en: "Random Spark",
			fr: "Étincelle Surprise"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		}
	}, {
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118817
	}
}

export default card