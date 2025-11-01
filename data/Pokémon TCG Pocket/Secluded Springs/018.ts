import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Slowking",
		fr: "Roigada"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Slowpoke"
	},

	description: {
		en: "When its head was bitten, toxins entered Slowpoke's\nhead and unlocked an extraordinary power.",
		fr: "Quand la tête de Ramoloss a été mordue, des toxines l'ont pénétrée et ont éveillé en lui des pouvoirs immenses."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Litter",
			fr: "Déchets"
		},

		damage: 50,
		cost: ["Water"],

		effect: {
			en: "Discard up to 2 Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 cartes Outil Pokémon de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card