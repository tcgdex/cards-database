import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [717],
	set: Set,

	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "kawayoo",

	description: {
		en: "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more."
	},

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			de: "Dunkler Zerschneider",
			es: "Cuchilla Oscura",
			pt: "Cortador de Escuridão",
			it: "Oscurotaglio"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Single Strike Wings",
			fr: "Ailes Poing Final",
			de: "Fokussierter-Angriff-Flügel",
			es: "Alas Golpe Brusco",
			pt: "Asas Golpe Decisivo",
			it: "Ali Colpo Singolo"
		},

		damage: 110
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582803
	}
}

export default card