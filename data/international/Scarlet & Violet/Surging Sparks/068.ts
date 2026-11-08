import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'en-us': "Kilowattrel ex",
		'fr-fr': "Fulgulairo-ex",
		'es-es': "Kilowattrel ex",
		'it-it': "Kilowattrel-ex",
		'pt-br': "Kilowattrel ex",
		'de-de': "Voltrean-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Return Charge",
			'fr-fr': "Charge Retour",
			'es-es': "Carga de Retorno",
			'it-it': "Carica di Ritorno",
			'pt-br': "Carga de Retorno",
			'de-de': "Rückkehrladung"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, attach up to 2 Basic {L} Energy cards from your hand to this Pokémon.",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, attachez jusqu'à 2 cartes Énergie {L} de base de votre main à ce Pokémon.",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, une hasta 2 cartas de Energía {L} Básica de tu mano a este Pokémon.",
			'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, assegna a questo Pokémon fino a due carte Energia base {L} dalla tua mano.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, ligue até 2 cartas de Energia {L} Básica da sua mão a este Pokémon.",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, lege bis zu 2 Basis-{L}-Energiekarten aus deiner Hand an dieses Pokémon an."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Thunder Lance",
			'fr-fr': "Lance Foudre",
			'es-es': "Asta Trueno",
			'it-it': "Lanciabolide",
			'pt-br': "Estaca do Trovão",
			'de-de': "Donnerlanze"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {L} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {L} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {L} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {L} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {L} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {L}-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794350,
				tcgplayer: 589977
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Yamashita",
	
}

export default card
