import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Zoroark-GX",
		fr: "Zoroark-GX",
		es: "Zoroark-GX",
		it: "Zoroark-GX",
		pt: "Zoroark-GX",
		de: "Zoroark-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Trade",
				fr: "Troc",
				es: "Intercambiar",
				it: "Contraccambio",
				pt: "Troca",
				de: "Ersetzen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca due carte.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 2 Karten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Riotous Beating",
				fr: "Méchante Raclée",
				es: "Paliza Desenfrenada",
				it: "Pestaggio Vandalico",
				pt: "Batidas Desenfreadas",
				de: "Prügelnde Meute"
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco.",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Trickster GX",
				fr: "Histrion GX",
				es: "Ilusionista GX",
				it: "Illusionista GX",
				pt: "Traquino GX",
				de: "Trickser GX"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. (You can’t use more than 1 GX attack in a game.)",
				fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Scegli uno degli attacchi dei Pokémon del tuo avversario e usalo al posto di questo attacco. Non puoi usare più di un attacco GX a partita.",
				pt: "Escolha 1 ataque dos Pokémon do seu oponente e use-o como este ataque (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein.  (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
	retreat: 2,



}

export default card
