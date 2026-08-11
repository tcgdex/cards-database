import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Rayquaza GX",
		'fr-fr': "Rayquaza GX",
		'es-es': "Rayquaza GX",
		'it-it': "Rayquaza GX",
		'pt-br': "Rayquaza GX",
		'de-de': "Rayquaza GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Stormy Winds",
				'fr-fr': "Vents Orageux",
				'es-es': "Vientos Tempestuosos",
				'it-it': "Vento Tempestoso",
				'pt-br': "Ventos Tempestuosos",
				'de-de': "Stürmische Winde"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser les 3 cartes du dessus de votre deck. Dans ce cas, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				'es-es': "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar las 3 primeras cartas de tu baraja. Si lo haces, une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare le prime tre carte del tuo mazzo. Se lo fai, assegna una carta Energia base dalla tua pila degli scarti a questo Pokémon.",
				'pt-br': "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar as 3 primeiras cartas do seu baralho. Se fizer isto, ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du die obersten 3 Karten deines Decks auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Break",
				'fr-fr': "Dragon Destructeur",
				'es-es': "Destrozo Dragón",
				'it-it': "Dragoblitz",
				'pt-br': "Esmagamento do Dragão",
				'de-de': "Drachenbruch"
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies Grass de base et d’Énergies Lightning de base attachées à vos Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía Grass Básica y Lightning Básica unida a tus Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia base Grass o Lightning assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano vezes a quantidade de Energia Grass básica e Lightning básica ligada aos seus Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an deine Pokémon angelegten Grass-Basis-Energien und Lightning-Basis-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tempest GX",
				'fr-fr': "Déchaînement GX",
				'es-es': "Tempestad GX",
				'it-it': "Tempesta-GX",
				'pt-br': "Vendaval GX",
				'de-de': "Unwetter GX"
			},
			effect: {
				'en-us': "Discard your hand and draw 10 cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez votre main et piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Descarta las cartas de tu mano y roba 10 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scarta le carte che hai in mano e pesca dieci carte. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Descarte a sua mão e compre 10 cartas (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 10 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 361397,
		tcgplayer: 170937
	}
}

export default card
