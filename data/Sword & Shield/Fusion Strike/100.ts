import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
		es: "Grubbin",
		it: "Grubbin",
		pt: "Grubbin",
		de: "Mabula"
	},

	stage: "Stage1",
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		en: "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Vise Grip",
			fr: "Force Poigne",
			de: "Klammer",
			es: "Agarre",
			pt: "Agarramento Compressor",
			it: "Presa"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
			de: "Kopf-Blitz",
			es: "Rayo de Cabeza",
			pt: "Raio de Cabeça",
			it: "Zuccalampo"
		},

		damage: 60
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582493
	}
}

export default card