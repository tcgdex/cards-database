import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Wynaut",
		'fr-fr': "Okéoké",
		'de-de': "Isso"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		360,
	],

	hp: 50,

	types: [
		"Psychic",
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
				'en-us': "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Qulbutoké de votre main sur Okéoké (vous le faites ainsi évoluer) et retirer à Okéoké tous ses marqueurs de dégât.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du Woingenau von deiner Hand auf Isso legen (das zählt als Entwickeln von Isso). Entferne alle Schadensmarken von Isso."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confusion Wave",
				'fr-fr': "Vague de confusion",
				'de-de': "Verwirrende Welle"
			},
			effect: {
				'en-us': "Both Wynaut and the Defending Pokémon are now Confused.",
				'fr-fr': "Okéoké et le Pokémon Défenseur sont maintenant Confus.",
				'de-de': "Isso und das Verteidigende Pokémon sind jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276948,
		tcgplayer: 90655
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
