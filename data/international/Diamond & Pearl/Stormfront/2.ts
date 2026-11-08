import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'de-de': "Impoleon"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Emperor Aura",
				'fr-fr': "Aura empereur",
				'de-de': "Kaiserliche Aura"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), when you play Empoleon from your hand to evolve 1 of your Active Pokémon, you may use this power. Your opponent can't attach any Energy cards from his or her hand to his or her Pokémon during your opponent's next turn.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Pingoléon de votre main pour faire évoluer 1 de vos Pokémon Actifs, vous pouvez utiliser ce pouvoir. Votre adversaire ne peut pas attacher de cartes Énergie de sa main sur ses Pokémon lors de son prochain tour.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) wenn du Impoleon von deiner Hand spielst, um 1 deiner aktiven Pokémon zu entwickeln, diese Poké-Power benutzen. Dein Gegner kann im nächsten Zug keine Energiekarten von seiner Hand an seine Pokémon legen."
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
				'en-us': "Steel Wing",
				'fr-fr': "Aile d'acier",
				'de-de': "Stahlflügel"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Empoleon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Pingoléon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der Impoleon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert ( nachdem Schwäche und Resistenz verrechnet wurden)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlpool",
				'fr-fr': "Siphon",
				'de-de': "Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf eine Münze. Bei ´Kopf´ lege 1 Energiekarte, die am verteidigenden Pokémon angelegt ist, auf den Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278300,
		tcgplayer: 85199
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
