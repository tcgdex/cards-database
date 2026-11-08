import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Wormadam Plant Cloak",
		'fr-fr': "Cheniselle Cape Plante",
		'de-de': "Burmadame Pflanzenumhang"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		413,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Burmy Plant Cloak",
		'fr-fr': "Cheniti Cape Plante",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Plant Cloak",
				'fr-fr': "Cape Plante",
				'de-de': "Pflanzenumhang"
			},
			effect: {
				'en-us': "If Wormadam Plant Cloak has 2 or more Grass Energy attached to it, Wormadam Plant Cloak gets +40 HP.",
				'fr-fr': "Si Cheniselle Cape Plante possède au moins 2 Énergies Grass, il obtient 40 PV de plus.",
				'de-de': "Solange an Burmadame Pflanzenumhang mindestens 2 -Energien angelegt sind, erhält es +40 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Hurricane",
				'fr-fr': "Feuille ouragan",
				'de-de': "Blätterhurrikan"
			},
			effect: {
				'en-us': "If the Defending Pokémon has fewer remaining HP than Wormadam Plant Cloak, the Defending Pokémon is now Confused.",
				'fr-fr': "S'il reste au Pokémon Défenseur moins de PV qu'à Cheniselle Cape Plante, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Burmadame Pflanzenumhang, ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When BURMY evolved, its cloak became a part of this Pokémon's body. The cloak is never shed.",
	},

	thirdParty: {
		cardmarket: 277794,
		tcgplayer: 90640
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
