import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel",
		it: "Sneasel",
		es: "Sneasel",
		pt: "Sneasel"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [215],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dig Claws",
			fr: "Creusogriffes",
			de: "Schaufelkrallen",
			it: "Scavazanne",
			es: "Hundir Garras",
			pt: "Fincar Garras"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Scratch",
			fr: "Griffe",
			de: "Kratzer",
			it: "Graffio",
			es: "Arañazo",
			pt: "Arranhão"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
