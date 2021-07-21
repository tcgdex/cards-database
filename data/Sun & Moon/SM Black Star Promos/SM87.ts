import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Latias",
		fr: "Latias",
		es: "Latias",
		it: "Latias",
		pt: "Latias",
		de: "Latias"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
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
				en: "Flight Support",
				fr: "Soutien Aérien",
				es: "Asistencia en Vuelo",
				it: "Assistenza Volo",
				pt: "Suporte de Voo",
				de: "Begleitflug"
			},
			effect: {
				en: "Your Latios in play have no Retreat Cost.",
				fr: "Vos Latios en jeu n’ont pas de Coût de Retraite.",
				es: "Tus Latios en juego no tienen ningún Coste de Retirada.",
				it: "I tuoi Latios in gioco non hanno costo di ritirata.",
				pt: "Seus Latios em jogo não têm custo de Recuo.",
				de: "Deine Latios im Spiel haben keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Misty Gale",
				fr: "Bourrasque Brumeuse",
				es: "Vendaval Nebuloso",
				it: "Raffica di Nebbia",
				pt: "Vendaval Nebuloso",
				de: "Nebelsturm"
			},
			effect: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon de Banc.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon en Banca.",
				it: "Cura ciascuno dei tuoi Pokémon in panchina da 30 danni.",
				pt: "Cure 30 pontos de dano de cada um dos seus Pokémon no Banco.",
				de: "Heile 30 Schadenspunkte bei jedem Pokémon auf deiner Bank."
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



}

export default card
