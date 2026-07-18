import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Miraidon",
		fr: "Miraidon",
		es: "Miraidon",
		'es-mx': "Miraidon",
		de: "Miraidon",
		it: "Miraidon",
		pt: "Miraidon"
	},

	illustrator: "mashu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Photon Cord",
			fr: "Câble Photonique",
			es: "Cable Fotónico",
			'es-mx': "Cable Fotónico",
			de: "Photonenkabel",
			it: "Prolunga Fotonica",
			pt: "Fiação de Fótons"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, move up to 2 Basic {L} Energy cards from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Si ce Pokémon est sur le Poste Actif et est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, déplacez jusqu'à 2 cartes Énergie {L} de base de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve hasta 2 cartas de Energía {L} Básica de este Pokémon a uno de tus Pokémon en Banca.",
			'es-mx': "Si este Pokémon está en el Puesto Activo y queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, mueve hasta 2 cartas de Energía {L} Básica de este Pokémon a 1 de tus Pokémon en Banca.",
			de: "Wenn dieses Pokémon in der Aktiven Position ist und durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, verschiebe bis zu 2 Basis-{L}-Energiekarten von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			it: "Se questo Pokémon è in posizione attiva e viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, sposta fino a due carte Energia base {L} da questo Pokémon a uno di quelli nella tua panchina.",
			pt: "Se este Pokémon estiver no Campo Ativo e for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, mova até 2 cartas de Energia {L} Básica deste Pokémon para 1 dos seus Pokémon no Banco."
		}
	}],

	attacks: [{
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			'es-mx': "Trueno",
			de: "Donner",
			it: "Tuono",
			pt: "Trovão"
		},

		cost: ["Lightning", "Lightning"],

		damage: 90,

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895815,
				tcgplayer: 704785
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895815,
				tcgplayer: 704785
			}
		},
	],
}

export default card
