import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'es-mx': "Honchkrow",
		'de-de': "Kramshef",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow"
	},

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'es-mx': "Murkrow",
		'de-de': "Kramurx",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [430],
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Wind of Darkness",
			'fr-fr': "Vent Obscur",
			'es-es': "Viento de Oscuridad",
			'es-mx': "Viento de Oscuridad",
			'de-de': "Wind der Finsternis",
			'it-it': "Vento dell'Oscurità",
			'pt-br': "Vento da Escuridão"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Sniping Feathers",
			'fr-fr': "Plumes de Précision",
			'es-es': "Plumaje Certero",
			'es-mx': "Plumas Certeras",
			'de-de': "Präzisionsfedern",
			'it-it': "Piume di Precisione",
			'pt-br': "Penas de Longo Alcance"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon, and this attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Descarta 2 Energías de este Pokémon, y este ataque hace 120 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'es-mx': "Descarta 2 Energías de este Pokémon, y este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel, und diese Attacke fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'it-it': "Scarta due Energie da questo Pokémon e questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Descarte 2 Energias deste Pokémon, e este ataque causa 120 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
		}
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
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It is merciless by nature. It is said that it never forgives the mistakes of its Murkrow followers.",
	},

	illustrator: "Anesaki Dynamic",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857633,
				tcgplayer: 662169,
				cardtrader: 356841
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857633,
				tcgplayer: 662169,
				cardtrader: 356841
			}
		},
	],	
}

export default card
