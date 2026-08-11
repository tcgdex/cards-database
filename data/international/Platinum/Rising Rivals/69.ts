import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Munchlax",
		'fr-fr': "Goinfrex Niv. 13",
		'de-de': "Mampfaxo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [446],

	hp: 70,

	types: [
		"Colorless"
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
				'en-us': "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et lui retirer tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Relaxo von deiner Hand auf Mampfaxo legen (das zählt als Entwickeln von Mampfaxo). Entferne alle Schadensmarken von Mampfaxo."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'fr-fr': "Repos",
				'de-de': "Ruhe"
			},
			effect: {
				'en-us': "Remove all Special Conditions and 6 damage counters from Munchlax. Munchlax is now Asleep.",
				'fr-fr': "Retirez à Goinfrex tous ses États Spéciaux ainsi que 6 marqueurs de dégât. Goinfrex est maintenant Endormi.",
				'de-de': "Entferne alle Speziellen Zustände und 6 Schadensmarken von Mampfaxo. Mampfaxo schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	retreat: 2,

	description: {
		'en-us': "In its desperation to gulp down food, it forgets about the food it has hidden under its fur."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278643,
				tcgplayer: 87639
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278643,
				tcgplayer: 87639
			}
		},
		{
			// TPCi Annual Distributors Meeting 2009
			type: "normal",
			stamp: ["chicago-2009"]
		},
	],

}

export default card
