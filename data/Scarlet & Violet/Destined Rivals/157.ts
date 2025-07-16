import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Swellow",
		fr: "Hélédelle",
		de: "Schwalboss",
		it: "Swellow",
		es: "Swellow",
		pt: "Swellow",
		'es-mx': "Swellow"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Add On",
			fr: "Ajout",
			de: "Hinzufügen",
			it: "Supplemento",
			es: "Sumar",
			pt: "Adicionar",
			'es-mx': "Acarrear"
		},

		effect: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
			de: "Ziehe 3 Karten.",
			it: "Pesca tre carte.",
			es: "Roba 3 cartas.",
			pt: "Compre 3 cartas.",
			'es-mx': "Roba 3 cartas."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
			de: "Turboschwinge",
			it: "Alaveloce",
			es: "Ala Veloz",
			pt: "Asa da Velocidade",
			'es-mx': "Ala Veloz"
		},

		damage: 70
	}],

	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
