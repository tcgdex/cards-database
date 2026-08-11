import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'de-de': "Regirock"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Regi Cycle",
				'fr-fr': "Regi-cycle",
				'de-de': "Regi-Kreislauf"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if you have a Fighting Energy card in your discard pile, you may discard 2 cards from your hand. Then, attach a Fighting Energy card from your discard pile to Regirock. This power can't be used if Regirock is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si vous possédez une carte Énergie Fighting dans votre pile de défausse, vous pouvez défausser 2 cartes de votre main. Ensuite, attachez une carte Énergie Fighting de votre pile de défausse sur Regirock. Ce pouvoir ne peut pas être utilisé si Regirock est affecté par un État Spécial.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, falls mindestens 1 -Energiekarte in deinem Ablagestapel liegt, 2 Karten von deiner Hand auf deinen Ablagestapel legen. Danach wähle 1 -Energiekarte in deinem Ablagestapel und lege sie an Regirock an. Diese Poké-Power kann nicht benutzt werden, wenn Regirock von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
				'de-de': "Steinkante"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its entire body is made of rock. If any part chips off in battle, it attaches rocks to repair itself.",
		'fr-fr': "Tout son corps est fait de roche. S'il s'ébrèche au combat, il utilise des pierres pour le réparer."
	},

	thirdParty: {
		cardmarket: 278187,
		tcgplayer: 88672
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
