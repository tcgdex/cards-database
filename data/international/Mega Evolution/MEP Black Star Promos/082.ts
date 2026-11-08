import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miraidon",
		'fr-fr': "Miraidon",
		'es-es': "Miraidon",
		'es-mx': "Miraidon",
		'de-de': "Miraidon",
		'it-it': "Miraidon",
		'pt-br': "Miraidon"
	},

	illustrator: "Taira Akitsu",
	rarity: "Promo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [1008],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Photon Cord",
			'fr-fr': "Câble Photonique",
			'es-es': "Cable Fotónico",
			'de-de': "Photonenkabel",
			'it-it': "Prolunga Fotonica",
			'pt-br': "Corda de Fótons"
		},

		effect: {
			'en-us': "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move up to 2 Basic {L} Energy cards from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, déplacez jusqu'à 2 cartes Énergie {L} de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'es-es': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve hasta 2 cartas de Energía {L} Básica de este Pokémon a uno de tus Pokémon en Banca.",
			'de-de': "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, verschiebe bis zu 2 Basis-{L}-Energiekarten von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'it-it': "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, sposta fino a due carte Energia base {L} da questo Pokémon a uno di quelli nella tua panchina.",
			'pt-br': "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova até 2 cartas de Energia {L} deste Pokémon para 1 dos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Thunder",
			'fr-fr': "Fatal-Foudre",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'en-us': "This Pokémon does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige 30 dégâts.",
			'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
			'pt-br': "Esse Pokémon causa 30 de danos a ele mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 894261,
				tcgplayer: 706135

			}
		},
	],
}

export default card
