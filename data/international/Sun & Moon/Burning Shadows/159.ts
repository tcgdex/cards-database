import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Gardevoir GX",
		'fr-fr': "Gardevoir GX",
		'es-es': "Gardevoir GX",
		'it-it': "Gardevoir GX",
		'pt-br': "Gardevoir GX",
		'de-de': "Guardevoir GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 230,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Secret Spring",
				'fr-fr': "Rebond Secret",
				'es-es': "Manantial Secreto",
				'it-it': "Sorgente Segreta",
				'pt-br': "Quicada Secreta",
				'de-de': "Geheime Quelle"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Fairy de tu mano a 1 de tus Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon una carta Energia Fairy dalla tua mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Fairy da sua mão a 1 dos seus Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Fairy-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Infinite Force",
				'fr-fr': "Force Infinie",
				'es-es': "Fuerza Infinita",
				'it-it': "Forza Infinita",
				'pt-br': "Força Infinita",
				'de-de': "Unendliche Macht"
			},
			effect: {
				'en-us': "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
				'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
				'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
				'pt-br': "Este ataque causa 30 pontos de dano vezes a quantidade de Energia ligada a ambos os Pokémon Ativos.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der an beide Aktiven Pokémon angelegten Energien zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Twilight GX",
				'fr-fr': "Tombée de la Nuit GX",
				'es-es': "Crepúsculo GX",
				'it-it': "Crepuscolo-GX",
				'pt-br': "Crepúsculo GX",
				'de-de': "Zwielicht GX"
			},
			effect: {
				'en-us': "Shuffle 10 cards from your discard pile into your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon 10 cartas de tu pila de descartes en tu baraja y barájalas todas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Rimischia dieci carte dalla tua pila degli scarti nel tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Embaralhe 10 cartas da sua pilha de descarte no seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mische 10 Karten aus deinem Ablagestapel in dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299557,
		tcgplayer: 138587
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
