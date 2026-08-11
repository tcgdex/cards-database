import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Magcargo GX",
		fr: "Volcaropod GX",
		es: "Magcargo GX",
		it: "Magcargo GX",
		pt: "Magcargo GX",
		de: "Magcargo GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 210,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Crushing Charge",
				fr: "Charge Écrasante",
				es: "Carga Colisión",
				it: "Carica Schiacciante",
				pt: "Carga Esmagadora",
				de: "Vernichtende Aufladung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard the top card of your deck. If it’s a basic Energy card, attach it to 1 of your Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser la carte du dessus de votre deck. Si c’est une carte Énergie de base, attachez-la à l’un de vos Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar la primera carta de tu baraja. Si es una carta de Energía Básica, únela a 1 de tus Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare la prima carta del tuo mazzo. Se è una carta Energia base, assegnala a uno dei tuoi Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar a primeira carta do seu baralho. Se for uma carta de Energia básica, ligue-a a 1 dos seus Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du die oberste Karte deines Decks auf deinen Ablagestapel legen. Wenn es eine Basis-Energiekarte ist, lege sie an 1 deiner Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Lava Flow",
				fr: "Torrent de Lave",
				es: "Corriente de Lava",
				it: "Flussolava",
				pt: "Fluxo de Lava",
				de: "Lavaschub"
			},
			effect: {
				en: "Discard any amount of basic Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
				fr: "Défaussez n’importe quel nombre d’Énergies de base de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Descarta cualquier cantidad de Energías Básicas de este Pokémon. Este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie base che vuoi assegnate a questo Pokémon. Questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Descarte qualquer quantidade de Energia básica deste Pokémon. Este ataque causa 50 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Lege beliebig viele Basis-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50+",

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burning Magma GX",
				fr: "Magma Brûlant GX",
				es: "Magma Ardiente GX",
				it: "Magma Incandescente-GX",
				pt: "Magma Abrasador GX",
				de: "Brennendes Magma GX"
			},
			effect: {
				en: "Discard the top 5 cards of your opponent’s deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez les 5 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta las 5 primeras cartas de la baraja de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta le prime cinque carte del mazzo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte as 5 primeiras cartas do baralho do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 365684,
		tcgplayer: 178847
	}
}

export default card
