import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Rayquaza-GX",
		fr: "Rayquaza-GX",
		es: "Rayquaza-GX",
		it: "Rayquaza-GX",
		pt: "Rayquaza-GX",
		de: "Rayquaza-GX"
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
				en: "Stormy Winds",
				fr: "Vents Orageux",
				es: "Vientos Tempestuosos",
				it: "Vento Tempestoso",
				pt: "Ventos Tempestuosos",
				de: "Stürmische Winde"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard the top 3 cards of your deck. If you do, attach a basic Energy card from your discard pile to this Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser les 3 cartes du dessus de votre deck. Dans ce cas, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar las 3 primeras cartas de tu baraja. Si lo haces, une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare le prime tre carte del tuo mazzo. Se lo fai, assegna una carta Energia base dalla tua pila degli scarti a questo Pokémon.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar as 3 primeiras cartas do seu baralho. Se fizer isto, ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du die obersten 3 Karten deines Decks auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an."
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
				en: "Dragon Break",
				fr: "Dragon Destructeur",
				es: "Destrozo Dragón",
				it: "Dragoblitz",
				pt: "Esmagamento do Dragão",
				de: "Drachenbruch"
			},
			effect: {
				en: "This attack does 30 damage times the amount of basic Grass and basic Lightning Energy attached to your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies Grass de base et d’Énergies Lightning de base attachées à vos Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Grass Básica y Lightning Básica unida a tus Pokémon.",
				it: "Questo attacco infligge 30 danni per ogni Energia base Grass o Lightning assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 30 pontos de dano vezes a quantidade de Energia Grass básica e Lightning básica ligada aos seus Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an deine Pokémon angelegten Grass-Basis-Energien und Lightning-Basis-Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tempest GX",
				fr: "Déchaînement GX",
				es: "Tempestad GX",
				it: "Tempesta-GX",
				pt: "Vendaval GX",
				de: "Unwetter GX"
			},
			effect: {
				en: "Discard your hand and draw 10 cards. (You can’t use more than 1 GX attack in a game.)",
				fr: "Défaussez votre main et piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Descarta las cartas de tu mano y roba 10 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scarta le carte che hai in mano e pesca dieci carte. Non puoi usare più di un attacco GX a partita.",
				pt: "Descarte a sua mão e compre 10 cartas (você não pode usar mais de 1 ataque GX por partida).",
				de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 10 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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



}

export default card
