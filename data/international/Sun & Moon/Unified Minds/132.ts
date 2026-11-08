import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Weavile GX",
		'fr-fr': "Dimoret GX",
		'es-es': "Weavile GX",
		'it-it': "Weavile GX",
		'pt-br': "Weavile GX",
		'de-de': "Snibunna GX"
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
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shadow Connection",
				'fr-fr': "Connexion Ténébreuse",
				'es-es': "Conexión Sombría",
				'it-it': "Unione d’Ombra",
				'pt-br': "Conexão Sombria",
				'de-de': "Schattenbund"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a basic Darkness Energy from 1 of your Pokémon to another of your Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Darkness de base de l’un de vos Pokémon vers un autre de vos Pokémon.",
				'es-es': "Todas las veces que quieras durante tu turno (antes de tu ataque), puedes mover 1 Energía Darkness Básica de 1 de tus Pokémon a otro de tus Pokémon.",
				'it-it': "Durante il tuo turno, prima di attaccare, puoi spostare un’Energia base Darkness da uno a un altro dei tuoi Pokémon tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Darkness básica de 1 dos seus Pokémon para outro Pokémon seu.",
				'de-de': "Beliebig oft während deines Zuges (bevor du angreifst) kannst du 1 Darkness-Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon verschieben."
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
				'en-us': "Claw Slash",
				'fr-fr': "Tranch’Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nocturnal Maneuvers GX",
				'fr-fr': "Manœuvres Nocturnes GX",
				'es-es': "Maniobras Nocturnas GX",
				'it-it': "Manovre Notturne GX",
				'pt-br': "Manobras Noturnas GX",
				'de-de': "Nächtliche Manöver GX"
			},
			effect: {
				'en-us': "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez autant de Pokémon de base que vous le voulez dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja cualquier cantidad de Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo un numero qualsiasi di Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por qualquer número de Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach beliebig vielen Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 388457,
		tcgplayer: 195103
	}
}

export default card
