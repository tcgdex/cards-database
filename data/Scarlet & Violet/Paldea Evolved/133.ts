import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		fr: "Farfuret",
		en: "Sneasel",
		es: "Sneasel",
		it: "Sneasel",
		pt: "Sneasel",
		de: "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Creusogriffes",
			en: "Dig Claws",
			es: "Hundir Garras",
			it: "Scavazanne",
			pt: "Fincar Garras",
			de: "Schaufelkrallen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kagemaru Himeno",

	description: {
		en: "This cunning Pokémon hides under the cover of darkness, waiting to attack its prey.",
	},

	thirdParty: {
		cardmarket: 715608
	}
}

export default card