import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn",
		fr: "Noacier"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [598],
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur"
	},

	description: {
		en: "Its spikes are harder than steel. This Pokémon\ncrawls across rock walls by stabbing the spikes\non its feelers into the stone."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde"
		},

		damage: 50,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card