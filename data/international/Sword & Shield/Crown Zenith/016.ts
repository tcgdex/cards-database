import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [893],
	set: Set,

	name: {
		'en-us': "Zarude",
		'fr-fr': "Zarude",
		'es-es': "Zarude",
		'it-it': "Zarude",
		'pt-br': "Zarude",
		'de-de': "Zarude"
	},

	illustrator: "Shiburingaru",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'es-es': "Jalón",
			'it-it': "Trascinato Via",
			'pt-br': "Arrastar para Fora",
			'de-de': "Wegzerren"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 20 damage to the new Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 20 dégâts au nouveau Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 20 danni al nuovo Pokémon attivo.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 20 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 20 Schadenspunkte zu."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Triple Whip",
			'fr-fr': "Triple Fouet",
			'es-es': "Triple Latigazo",
			'it-it': "Triplafrustata",
			'pt-br': "Chicote Triplo",
			'de-de': "Tripelpeitsche"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Within dense forests, this Pokémon lives in a pack with others of its kind. It's incredibly aggressive, and the other Pokémon of the forest fear it.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691733,
				tcgplayer: 478088
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691733,
				tcgplayer: 478088
			}
		},
	],
}

export default card
