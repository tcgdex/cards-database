import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	illustrator: "Hasuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Haymaker",
			fr: "Coup de Poing Fracassant",
			es: "Golpazo",
			it: "Pugno Tremendo",
			pt: "Golpe Arrasador",
			de: "Schwinger"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Haymaker.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup de Poing Fracassant.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Pugno Tremendo.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Arrasador.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schwinger nicht einsetzen."
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "While it's often blamed for power outages, the truth is the cause of outages is more often an error on the part of the electric company."
	}
}

export default card
