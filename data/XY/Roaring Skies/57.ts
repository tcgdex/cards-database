import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		es: "Salamence",
		it: "Salamence",
		pt: "Salamence",
		de: "Brutalanda"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
		es: "Shelgon",
		it: "Shelgon",
		pt: "Shelgon",
		de: "Draschel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Shatter",
				fr: "Fracas",
				es: "Fragmentar",
				it: "Frantumare",
				pt: "Estilhaçar",
				de: "Zertrümmern"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer card de Estádio em jogo.",
				de: "Lege eine beliebige Stadionkarte aus dem Spiel auf den Ablagestapel."
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Howl",
				fr: "Hurlement Puissant",
				es: "Aullido Poderoso",
				it: "Fortegrido",
				pt: "Uivo do Poder",
				de: "Machtgeheul"
			},
			effect: {
				en: "This attack does 20 damage times the number of cards in your opponent's hand.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de cartes dans la main de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño por cada carta en la mano de tu rival.",
				it: "Questo attacco infligge 20 danni per ogni carta che ha in mano il tuo avversario.",
				pt: "Este ataque causa 20 de danos vezes o número de cards na mão do seu oponente.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der Karten auf der Hand deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Steam Blast",
				fr: "Geyser de Vapeur",
				es: "Explosión Vapor",
				it: "Sbuffo di Vapore",
				pt: "Explosão de Vapor",
				de: "Dampfstrahl"
			},
			effect: {
				en: "Discard 3 Energy attached to this Pokémon.",
				fr: "Défaussez 3 Énergies attachées à ce Pokémon.",
				es: "Descarta 3 Energías unidas a este Pokémon.",
				it: "Scarta tre Energie assegnate a questo Pokémon.",
				pt: "Descarte 3 Energias ligadas a este Pokémon.",
				de: "Lege 3 an dieses Pokémon angelegte Energien auf deinen Ablagestapel."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 282725
	}
}

export default card
