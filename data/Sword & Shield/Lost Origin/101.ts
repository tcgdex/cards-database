import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [369],
	set: Set,

	name: {
		en: "Relicanth",
		fr: "Relicanth",
		es: "Relicanth",
		it: "Relicanth",
		pt: "Relicanth",
		de: "Relicanth"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Into the Deep",
			fr: "Dans l'Abysse",
			es: "En lo Profundo",
			it: "Baratro",
			pt: "Nas Profundezas",
			de: "In die Tiefe"
		},

		effect: {
			en: "Put up to 2 basic Energy cards from your discard pile into your hand.",
			fr: "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
			es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
			de: "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674113,
		tcgplayer: 283994
	}
}

export default card