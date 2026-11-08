import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Solgaleo GX",
		'fr-fr': "Solgaleo GX",
		'es-es': "Solgaleo GX",
		'it-it': "Solgaleo GX",
		'pt-br': "Solgaleo GX",
		'de-de': "Solgaleo GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		791,
	],

	hp: 250,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Cosmoem",
		'fr-fr': "Cosmovum",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ultra Road",
				'fr-fr': "Ultra-Route",
				'es-es': "Camino Ultra",
				'it-it': "Ultrapista",
				'pt-br': "Ultracaminho",
				'de-de': "Ultraweg"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Sunsteel Strike",
				'fr-fr': "Choc Météore",
				'es-es': "Meteoimpacto",
				'it-it': "Astrocarica",
				'pt-br': "Ataque Solaraço",
				'de-de': "Stahlgestirn"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie de ce Pokémon.",
				'es-es': "Descarta todas las Energías de este Pokémon.",
				'it-it': "Scarta tutte le Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte toda a Energia deste Pokémon.",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 230,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Sol Burst GX",
				'fr-fr': "Éclat Solaire GX",
				'es-es': "Explosión Sol GX",
				'it-it': "Raffica Solare-GX",
				'pt-br': "Irradiação Solar GX",
				'de-de': "Solarplosion GX"
			},
			effect: {
				'en-us': "Search your deck for up to 5 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 5 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 5 cartas de Energía y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cerca nel tuo mazzo fino a cinque carte Energia e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Procure por até 5 cartas de Energia no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 5 Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 295468,
		tcgplayer: 127194
	}
}

export default card
