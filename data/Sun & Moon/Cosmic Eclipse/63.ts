import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Wishiwashi GX",
		fr: "Froussardine GX",
		es: "Wishiwashi GX",
		it: "Wishiwashi GX",
		pt: "Wishiwashi GX",
		de: "Lusardin GX"
	},

	illustrator: "sadaji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 130,

	types: [
		"Water",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "School Storm",
				fr: "Banc Houleux",
				es: "Banco Tormentoso",
				it: "Banco Dirompente",
				pt: "Cardume Tempestuoso",
				de: "Schwarmsturm"
			},
			effect: {
				en: "This attack does 20 damage for each of your Wishiwashi and Wishiwashi-GX in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Froussardine et Froussardine-GX en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Wishiwashi y Wishiwashi-GX en juego.",
				it: "Questo attacco infligge 20 danni per ogni tuo Wishiwashi e Wishiwashi-GX in gioco.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Wishiwashi e Wishiwashi-GX em jogo.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Lusardin und Lusardin-GX im Spiel zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Massive Catch GX",
				fr: "Prise Massive GX",
				es: "Captura Masiva GX",
				it: "Caccia Grossa GX",
				pt: "Captura Imensa GX",
				de: "Großer Fang GX"
			},
			effect: {
				en: "Look at the top 12 cards of your deck and put any number of Basic Pokémon you find there onto your Bench. Shuffle the other cards back into your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Regardez les 12 cartes du dessus de votre deck et placez autant de Pokémon de base trouvés que vous le voulez sur votre Banc. Mélangez les autres cartes avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Mira las 12 primeras cartas de tu baraja y pon cualquier cantidad de Pokémon Básicos que encuentres entre ellas en tu Banca. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Guarda le prime 12 carte del tuo mazzo, prendi un numero qualsiasi di Pokémon Base presenti tra quelle carte e mettili nella tua panchina. Poi rimischia le altre carte nel tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Olhe as 12 primeiras cartas do seu baralho e coloque qualquer número de Pokémon Básicos que encontrar lá no seu Banco. Embaralhe as demais cartas de volta no seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Schau dir die obersten 12 Karten deines Decks an und lege beliebig viele Basis-Pokémon, die du dort findest, auf deine Bank. Mische die anderen Karten zurück in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 407964
	}
}

export default card
