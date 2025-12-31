import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
		de: "Tentacha"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		72,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Poison Sting",
				fr: "Gaz toxik",
				de: "Giftstachel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Recover",
				fr: "Soin",
				de: "Erholung"
			},
			effect: {
				en: "Discard 1 Energy card attached to Tentacool in order to use this attack. Remove all damage counters from Tentacool.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Tentacool afin d'utiliser cette attaque. Retirez tous les marqueurs de dégâts sur Tentacool.",
				de: "Lege 1 an Tentacha angelegte -Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Entferne alle Schadensmarken von Tentacha."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275189,
		tcgplayer: 89865
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
