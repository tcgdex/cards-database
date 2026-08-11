import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'de-de': "Karpador"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

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
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Dreschflegel"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Magikarp.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Magicarpe.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Karpador zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-rage",
				'de-de': "Drachenwut"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez une pile, cette attaque est sans effet.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen 'Zahl' gezeigt haben, hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is said to be the world's weakest Pokémon. No one knows why it has managed to survive.",
		'fr-fr': "Ce Pokémon est réputé pour être le plus faible au monde. Nul ne sait comment son espèce perdure."
	},

	thirdParty: {
		cardmarket: 277718,
		tcgplayer: 87029
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
