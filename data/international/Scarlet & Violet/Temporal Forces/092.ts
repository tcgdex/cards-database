import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [750],
	set: Set,

	name: {
		'en-us': "Mudsdale",
		'fr-fr': "Bourrinos",
		'es-es': "Mudsdale",
		'it-it': "Mudsdale",
		'pt-br': "Mudsdale",
		'de-de': "Pampross"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'pt-br': "Mudbray",
		'de-de': "Pampuli"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Mud Stock",
			'fr-fr': "Plein de Boue",
			'es-es': "Reserva de Lodo",
			'it-it': "Fangoscorta",
			'pt-br': "Estoque Lamacento",
			'de-de': "Schlammvorrat"
		},

		effect: {
			'en-us': "Attach a Basic {F} Energy card from your discard pile to each of your Benched Pokémon.",
			'fr-fr': "Attachez une carte Énergie {F} de base de votre pile de défausse à chacun de vos Pokémon de Banc.",
			'es-es': "Une 1 carta de Energía {F} Básica de tu pila de descartes a cada uno de tus Pokémon en Banca.",
			'it-it': "Assegna a ciascuno dei Pokémon nella tua panchina una carta Energia base {F} dalla tua pila degli scarti.",
			'pt-br': "Ligue uma carta de Energia {F} Básica da sua pilha de descarte a cada um dos seus Pokémon no Banco.",
			'de-de': "Lege 1 Basis-{F}-Energiekarte aus deinem Ablagestapel an jedes Pokémon auf deiner Bank an."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "High Horsepower",
			'fr-fr': "Cavalerie Lourde",
			'es-es': "Fuerza Equina",
			'it-it': "Forza Equina",
			'pt-br': "Potência Equina",
			'de-de': "Pferdestärke"
		},

		effect: {
			'en-us': "This Pokémon also does 40 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 40 dégâts.",
			'es-es': "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 40 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon has been treasured not just for its physical labor but also because it produces high-quality mud used for making pottery.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760722,
				tcgplayer: 542836
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760722,
				tcgplayer: 542836
			}
		},
	],

	illustrator: "Naoyo Kimura",

}

export default card