import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Pupitar",
		fr: "Ymphect"
	},

	illustrator: "Sekio",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [247],
	hp: 80,
	types: ["Fighting"],

	evolveFrom: {
		en: "Larvitar"
	},

	description: {
		en: "This pupa flies around wildly by venting with\ngreat force the gas pressurized inside its body.",
		fr: "Cette chrysalide file comme une fusée en expulsant les gaz sous pression enfermés dans son corps, sans pouvoir contrôler sa trajectoire."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 30 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card