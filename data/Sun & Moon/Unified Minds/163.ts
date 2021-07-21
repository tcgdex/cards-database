import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
		es: "Kangaskhan",
		it: "Kangaskhan",
		pt: "Kangaskhan",
		de: "Kangama"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		115,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Draw",
				fr: "Double Pioche",
				es: "Roba Doble",
				it: "Pescata Doppia",
				pt: "Compra Dupla",
				de: "Zweifachzug"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cartas.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tag Impact",
				fr: "Impact d’Escouade",
				es: "Impacto Relevo",
				it: "Impatto Alleati",
				pt: "Impacto de Aliados",
				de: "Team-Einschlag"
			},
			effect: {
				en: "This attack does 50 damage for each of your TAG TEAM Pokémon in play.",
				fr: "Cette attaque inflige 50 dégâts pour chacun de vos Pokémon ESCOUADE en jeu.",
				es: "Este ataque hace 50 puntos de daño por cada uno de tus Pokémon de equipo de RELEVOS en juego.",
				it: "Questo attacco infligge 50 danni per ogni tuo Pokémon ALLEATI in gioco.",
				pt: "Este ataque causa 50 pontos de dano para cada um dos seus Pokémon ALIADOS em jogo.",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl deiner TAG TEAM Pokémon im Spiel zu."
			},
			damage: "50×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
