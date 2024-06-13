import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		en: "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Explosive Discontent"
		},

		damage: "30×",

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card