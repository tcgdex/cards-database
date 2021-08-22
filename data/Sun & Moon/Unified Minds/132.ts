import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Weavile GX",
		fr: "Dimoret GX",
		es: "Weavile GX",
		it: "Weavile GX",
		pt: "Weavile GX",
		de: "Snibunna GX"
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		461,
	],
	hp: 200,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Connection",
				fr: "Connexion Ténébreuse",
				es: "Conexión Sombría",
				it: "Unione d’Ombra",
				pt: "Conexão Sombria",
				de: "Schattenbund"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a basic Darkness Energy from 1 of your Pokémon to another of your Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
				es: "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Darkness Básica de 1 de tus Pokémon a otro de tus Pokémon.",
				it: "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia base Darkness da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Darkness básica de 1 dos seus Pokémon para outro Pokémon seu.",
				de: "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Darkness-Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Claw Slash",
				fr: "Tranch’Griffe",
				es: "Cuchillada Garra",
				it: "Lacerartiglio",
				pt: "Golpe de Garra",
				de: "Klauenschlitzer"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nocturnal Maneuvers GX",
				fr: "Manœuvres Nocturnes GX",
				es: "Maniobras Nocturnas GX",
				it: "Manovre Notturne GX",
				pt: "Manobras Noturnas GX",
				de: "Nächtliche Manöver GX"
			},
			effect: {
				en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez autant de Pokémon de base que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja cualquier cantidad de Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo un numero qualsiasi di Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por qualquer número de Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach beliebig vielen Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
