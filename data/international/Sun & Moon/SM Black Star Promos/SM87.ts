import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias",
		'es-es': "Latias",
		'it-it': "Latias",
		'pt-br': "Latias",
		'de-de': "Latias"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flight Support",
				'fr-fr': "Soutien Aérien",
				'es-es': "Asistencia en Vuelo",
				'it-it': "Assistenza Volo",
				'pt-br': "Suporte de Voo",
				'de-de': "Begleitflug"
			},
			effect: {
				'en-us': "Your Latios in play have no Retreat Cost.",
				'fr-fr': "Vos Latios en jeu n’ont pas de Coût de Retraite.",
				'es-es': "Tus Latios en juego no tienen ningún Coste de Retirada.",
				'it-it': "I tuoi Latios in gioco non hanno costo di ritirata.",
				'pt-br': "Seus Latios em jogo não têm custo de Recuo.",
				'de-de': "Deine Latios im Spiel haben keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Misty Gale",
				'fr-fr': "Bourrasque Brumeuse",
				'es-es': "Vendaval Nebuloso",
				'it-it': "Raffica di Nebbia",
				'pt-br': "Vendaval Nebuloso",
				'de-de': "Nebelsturm"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Benched Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				'it-it': "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
				'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible.",
	},
}

export default card
