import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Celebi ◇",
		fr: "Celebi ◇",
		es: "Celebi ◇",
		it: "Celebi ◇",
		pt: "Celebi ◇",
		de: "Celebi ◇"
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
				en: "Time Distortion",
				fr: "Distorsion Temporelle",
				es: "Distorsión Temporal",
				it: "Distorsione Temporale",
				pt: "Distorção Temporal",
				de: "Zeitverzerrung"
			},
			effect: {
				en: "Devolve any number of your Benched Pokémon as many times as you like. Put each Evolution card removed this way into your hand.",
				fr: "Faites dés-évoluer autant de vos Pokémon de Banc autant de fois que vous voulez. Placez chaque carte Évolution retirée de cette façon dans votre main.",
				es: "Involuciona cualquier cantidad de tus Pokémon en Banca tantas veces como desees. Pon cada carta de Evolución eliminada de esta manera en tu mano.",
				it: "Annulla a piacimento l’evoluzione di un numero qualsiasi di Pokémon che hai in panchina. Aggiungi le carte Evoluzione rimosse in questo modo a quelle che hai in mano.",
				pt: "Reverta a evolução de qualquer número dos seus Pokémon no Banco quantas vezes desejar. Coloque cada carta de Evolução removida desta maneira na sua mão.",
				de: "Rückentwickle beliebig viele Pokémon auf deiner Bank beliebig oft. Nimm jede auf diese Weise entfernte Entwicklungskarte auf deine Hand."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leech Seed",
				fr: "Vampigraine",
				es: "Drenadoras",
				it: "Parassiseme",
				pt: "Semente Sanguessuga",
				de: "Egelsamen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
