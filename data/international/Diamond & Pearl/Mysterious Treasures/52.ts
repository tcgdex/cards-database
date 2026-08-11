import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Happiny",
		'fr-fr': "Ptiravi",
		'de-de': "Wonneira"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		440,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Chansey from your hand onto Happiny (this counts as evolving Happiny) and remove all damage counters from Happiny.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Leveinard de votre main sur Ptiravi (vous le faites ainsi évoluer) et retirer à Ptiravi tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Chaneira von deiner Hand auf Wonneira legen (das zählt als Entwickeln von Wonneira). Entferne alle Schadensmarken von Wonneira."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Lively",
				'fr-fr': "Vitalité",
				'de-de': "Aufpäppeln"
			},
			effect: {
				'en-us': "Remove 2 damage counters from 1 of your Pokémon.",
				'fr-fr': "Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It loves round white things. It carries and egg-shaped rock in imitation of CHANSEY.",
		'fr-fr': "Ce Pokémon aime ce qui est rond et blanc et transporte un caillou en forme d'œuf pour imiter Leveinard."
	},

	thirdParty: {
		cardmarket: 277681,
		tcgplayer: 86006
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
