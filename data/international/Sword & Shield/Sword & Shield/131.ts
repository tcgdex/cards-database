import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Ferrothorn",
		'fr-fr': "Noacier",
		'es-es': "Ferrothorn",
		'it-it': "Ferrothorn",
		'pt-br': "Ferrothorn",
		'de-de': "Tentantel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Triple Smash",
				'fr-fr': "Triple Éclate",
				'es-es': "Golpe Triple",
				'it-it': "Tripla Schiacciata",
				'pt-br': "Pancada Tripla",
				'de-de': "Dreifachschmetterer"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Energy Slap",
				'fr-fr': "Volée Énergique",
				'es-es': "Bofetón Energético",
				'it-it': "Schiaffo Energetico",
				'pt-br': "Tapa Energético",
				'de-de': "Energiehieb"
			},
			effect: {
				'en-us': "You may move all Energy from this Pokémon to 1 of your Benched Pokémon.",
				'fr-fr': "Vous pouvez déplacer toute l'Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
				'es-es': "Puedes mover todas las Energías de este Pokémon a 1 de tus Pokémon en Banca.",
				'it-it': "Puoi spostare tutte le Energie da questo Pokémon a uno di quelli nella tua panchina.",
				'pt-br': "Você pode mover todas as Energias deste Pokémon para 1 dos seus Pokémon no Banco.",
				'de-de': "Du kannst alle Energien von diesem Pokémon auf 1 Pokémon auf deiner Bank verschieben."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
	},

	dexId: [598],

	thirdParty: {
		cardmarket: 436764,
		tcgplayer: 208442
	}
}

export default card
