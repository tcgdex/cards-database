import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Celebi ◇",
		'fr-fr': "Celebi ◇",
		'es-es': "Celebi ◇",
		'it-it': "Celebi ◇",
		'pt-br': "Celebi ◇",
		'de-de': "Celebi ◇"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Time Distortion",
				'fr-fr': "Distorsion Temporelle",
				'es-es': "Distorsión Temporal",
				'it-it': "Distorsione Temporale",
				'pt-br': "Distorção Temporal",
				'de-de': "Zeitverzerrung"
			},
			effect: {
				'en-us': "Devolve any number of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
				'fr-fr': "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
				'es-es': "Involuciona cualquier cantidad de tus Pokémon en Banca tantas veces como desees. Pon cada carta de Evolución eliminada de esta manera en tu mano.",
				'it-it': "Annulla a piacimento l’evoluzione di un numero qualsiasi di Pokémon che hai in panchina. Aggiungi le carte Evoluzione rimosse in questo modo a quelle che hai in mano.",
				'pt-br': "Reverta a evolução de qualquer número dos seus Pokémon no Banco quantas vezes desejar. Coloque cada carta de Evolução removida desta maneira na sua mão.",
				'de-de': "Rückentwickle beliebig viele Pokémon auf deiner Bank beliebig oft. Nimm jede auf diese Weise entfernte Entwicklungskarte auf deine Hand."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'es-es': "Drenadoras",
				'it-it': "Parassiseme",
				'pt-br': "Semente Sanguessuga",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 pontos de dano deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'fr-fr': "Vampigraine",
			},
			effect: {
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the power to travel across time, but it is said to appear only in peaceful times.",
	},

	thirdParty: {
		cardmarket: 365612
	}
}

export default card
