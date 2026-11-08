import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [476],
	set: Set,

	name: {
		'en-us': "Probopass",
		'fr-fr': "Tarinorme",
		'es-es': "Probopass",
		'it-it': "Probopass",
		'pt-br': "Probopass",
		'de-de': "Voluminas"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Magnetic Tension",
			'fr-fr': "Tension Magnétique",
			'es-es': "Tensión Magnética",
			'it-it': "Tensione Magnetica",
			'pt-br': "Tensão Magnética",
			'de-de': "Magnetspannung"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 40 damage to the new Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Iron Tackle",
			'fr-fr': "Charge de Fer",
			'es-es': "Bloqueo de Hierro",
			'it-it': "Azione Ferrea",
			'pt-br': "Golpe de Colisão Férreo",
			'de-de': "Eisentackle"
		},

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "F",


	description: {
		'en-us': "It uses three small units to catch prey and battle enemies. The main body mostly just gives orders.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608645,
				tcgplayer: 263818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608645,
				tcgplayer: 263818
			}
		},
	],
}

export default card
