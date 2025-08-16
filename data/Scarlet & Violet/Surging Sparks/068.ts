import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		en: "Kilowattrel ex",
		fr: "Fulgulairo-ex",
		es: "Kilowattrel ex",
		it: "Kilowattrel-ex",
		pt: "Kilowattrel ex",
		de: "Voltrean-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Return Charge",
			fr: "Charge Retour",
			es: "Carga de Retorno",
			it: "Carica di Ritorno",
			pt: "Carga de Retorno",
			de: "Rückkehrladung"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, attach up to 2 Basic {L} Energy cards from your hand to this Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, attachez jusqu'à 2 cartes Énergie {L} de base de votre main à ce Pokémon.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, une hasta 2 cartas de Energía {L} Básica de tu mano a este Pokémon.",
			it: "Scambia questo Pokémon con uno della tua panchina. Se lo fai, assegna a questo Pokémon fino a due carte Energia base {L} dalla tua mano.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, ligue até 2 cartas de Energia {L} Básica da sua mão a este Pokémon.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, lege bis zu 2 Basis-{L}-Energiekarten aus deiner Hand an dieses Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Thunder Lance",
			fr: "Lance Foudre",
			es: "Asta Trueno",
			it: "Lanciabolide",
			pt: "Estaca do Trovão",
			de: "Donnerlanze"
		},

		effect: {
			en: "This attack does 40 more damage for each {L} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {L} attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {L} unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {L} assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {L} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 0,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "PLANETA Yamashita",

	thirdParty: {
		cardmarket: 794350
	}
}

export default card
