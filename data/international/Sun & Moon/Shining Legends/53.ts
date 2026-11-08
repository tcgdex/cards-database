import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Zoroark GX",
		'fr-fr': "Zoroark GX",
		'es-es': "Zoroark GX",
		'it-it': "Zoroark GX",
		'pt-br': "Zoroark GX",
		'de-de': "Zoroark GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
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
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Trade",
				'fr-fr': "Troc",
				'es-es': "Intercambiar",
				'it-it': "Contraccambio",
				'pt-br': "Troca",
				'de-de': "Ersetzen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta da sua mão. Se fizer isto, compre 2 cartas.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 2 Karten."
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
				'en-us': "Riotous Beating",
				'fr-fr': "Méchante Raclée",
				'es-es': "Paliza Desenfrenada",
				'it-it': "Pestaggio Vandalico",
				'pt-br': "Batidas Desenfreadas",
				'de-de': "Prügelnde Meute"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Pokémon in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon in gioco.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon em jogo.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon im Spiel zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Trickster GX",
				'fr-fr': "Histrion GX",
				'es-es': "Ilusionista GX",
				'it-it': "Illusionista-GX",
				'pt-br': "Traquino GX",
				'de-de': "Trickser GX"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Pokémon’s attacks and use it as this attack. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Elige 1 de los ataques de los Pokémon de tu rival y úsalo para este ataque. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scegli uno degli attacchi dei Pokémon del tuo avversario e usalo al posto di questo attacco. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Escolha 1 ataque dos Pokémon do seu oponente e use-o como este ataque (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wähle 1 Attacke der Pokémon deines Gegners und setze sie als diese Attacke ein.  (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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

	thirdParty: {
		cardmarket: 302191,
		tcgplayer: 146715
	}
}

export default card
