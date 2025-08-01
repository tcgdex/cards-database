import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Solgaleo GX",
		fr: "Solgaleo GX",
		es: "Solgaleo GX",
		it: "Solgaleo GX",
		pt: "Solgaleo GX",
		de: "Solgaleo GX"
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
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ultra Road",
				fr: "Ultra-Route",
				es: "Camino Ultra",
				it: "Ultrapista",
				pt: "Ultracaminho",
				de: "Ultraweg"
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch your Active Pokémon with 1 of your Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes cambiar tu Pokémon Activo por 1 de tus Pokémon en Banca.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare il tuo Pokémon attivo con uno dei tuoi Pokémon in panchina.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode trocar o seu Pokémon Ativo por 1 dos seus Pokémon no Banco.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
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
				en: "Sunsteel Strike",
				fr: "Choc Météore",
				es: "Meteoimpacto",
				it: "Astrocarica",
				pt: "Ataque Solaraço",
				de: "Stahlgestirn"
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toute l’Énergie de ce Pokémon.",
				es: "Descarta todas las Energías de este Pokémon.",
				it: "Scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia deste Pokémon.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 230,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Sol Burst GX",
				fr: "Éclat Solaire GX",
				es: "Explosión Sol GX",
				it: "Raffica Solare-GX",
				pt: "Irradiação Solar GX",
				de: "Solarplosion GX"
			},
			effect: {
				en: "Search your deck for up to 5 Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes Énergie dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja hasta 5 cartas de Energía y únelas a tus Pokémon de la manera que desees. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo fino a cinque carte Energia e assegnale a piacimento ai tuoi Pokémon. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por até 5 cartas de Energia no seu baralho e ligue-as aos seus Pokémon como desejar. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach bis zu 5 Energiekarten und lege sie beliebig an deine Pokémon an. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
		cardmarket: 295400
	}
}

export default card
