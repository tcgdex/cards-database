import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelénox",
		'es-es': "Duskull",
		'it-it': "Duskull",
		'pt-br': "Duskull",
		'de-de': "Zwirrlicht"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Revival",
				'fr-fr': "Réapparition",
				'es-es': "Reaparición",
				'it-it': "Vitalizzante",
				'pt-br': "Renovação",
				'de-de': "Wiederbeleben"
			},
			effect: {
				'en-us': "Put a Basic Pokémon from your opponent's discard pile onto his or her Bench.",
				'fr-fr': "Prenez un Pokémon de base dans la pile de défausse de votre adversaire et placez-le sur son Banc.",
				'es-es': "Pon 1 Pokémon Básico de la pila de descartes de tu rival en su Banca.",
				'it-it': "Prendi un Pokémon Base dalla pila degli scarti del tuo avversario e mettilo nella sua panchina.",
				'pt-br': "Coloque um Pokémon Básico da pilha de descarte do seu oponente no Banco desse oponente.",
				'de-de': "Nimm 1 Basis-Pokémon vom Ablagestapel deines Gegners und lege es auf seine Bank."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sneaky Placement",
				'fr-fr': "Placement Vicieux",
				'es-es': "Colocación Furtiva",
				'it-it': "Furtivappoggio",
				'pt-br': "Posição Sorrateira",
				'de-de': "Heimlichtuerei"
			},
			effect: {
				'en-us': "Put 1 damage counter on your opponent's Active Pokémon.",
				'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
				'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
				'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
				'pt-br': "Coloque 1 contador de danos no Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It doggedly pursues its prey wherever it goes. However, the chase is abandoned at sunrise.",
	},

	thirdParty: {
		cardmarket: 281521,
		tcgplayer: 91171
	}
}

export default card
