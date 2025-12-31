import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Dartrix",
		fr: "Efflèche"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Rowlet"
	},

	description: {
		en: "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you.",
		fr: "Ce Pokémon narcissique accorde énormément d'importance à la propreté. Il refuse parfois d'obéir si l'on ne prend pas grand soin de lui."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Skill Dive",
			fr: "Plongeon Contrôlé"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card