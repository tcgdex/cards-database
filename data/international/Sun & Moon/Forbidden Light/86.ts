import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		671,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Floette",
		'fr-fr': "Floette",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wondrous Gift",
				'fr-fr': "Cadeau Merveilleux",
				'es-es': "Regalo Extraordinario",
				'it-it': "Dono Meraviglioso",
				'pt-br': "Presente Admirável",
				'de-de': "Wundersame Gabe"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, put an Item card from your discard pile on top of your deck.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte Objet de votre pile de défausse sur le dessus de votre deck.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, pon 1 carta de Objeto de tu pila de descartes en la parte superior de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, prendi una carta Strumento dalla tua pila degli scarti e mettila in cima al tuo mazzo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, coloque 1 carta de Item da sua pilha de descarte como a primeira carta do seu baralho.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Lege bei Kopf 1 Itemkarte aus deinem Ablagestapel oben auf dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Mist Guard",
				'fr-fr': "Bruine Gardienne",
				'es-es': "Niebla Protectora",
				'it-it': "Guardia Nebulosa",
				'pt-br': "Névoa Protetora",
				'de-de': "Dunstschutz"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from Dragon Pokémon during your opponent’s next turn.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Dragon pendant le prochain tour de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de Pokémon Dragon durante el próximo turno de tu rival.",
				'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Dragon durante il prossimo turno del tuo avversario.",
				'pt-br': "Prevenirá todo o dano causado a este Pokémon por ataques dos Pokémon Dragon durante a próxima vez de jogar do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Dragon-Pokémon zugefügt wird."
			},
			damage: 70,

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

	description: {
		'en-us': "In times long past, governors of castles would invite Florges to create flower gardens to embellish the castle domains.",
	},

	thirdParty: {
		cardmarket: 355600,
		tcgplayer: 165744
	}
}

export default card
