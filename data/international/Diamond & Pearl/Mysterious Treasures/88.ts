import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Magby",
		'fr-fr': "Magby",
		'de-de': "Magby"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'fr-fr': "Évolution bébé",
				'de-de': "Baby-Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby) and remove all damage counters from Magby.",
				'fr-fr': "Une seule fois lors votre tour (avant votre attaque), vous pouvez placer Magmar de votre main sur Magby (vous le faites ainsi évoluer) et retirer à Magby tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Magmar von deiner Hand auf Magby legen (das zählt als Entwickeln von Magby). Entferne alle Schadensmarken von Magby."
			},
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Scorch",
				'fr-fr': "Brûler",
				'de-de': "Versengen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verbrannt."
			},

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its body temperature is around 1,100 degrees F. It is healthy if it is breathing yellow flames.",
		'fr-fr': "Sa température corporelle avoisine les 600°C. Son souffle est jaune quand il est en bonne santé."
	},

	thirdParty: {
		cardmarket: 277717,
		tcgplayer: 87005
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
