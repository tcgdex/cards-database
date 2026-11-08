import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Gliscor",
		'fr-fr': "Scorvol",
		'de-de': "Skorgro"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		472,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Gligar",
		'fr-fr': "Skorgla",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Burning Poison",
				'fr-fr': "Poison brûlant",
				'de-de': "Giftbrand"
			},
			effect: {
				'en-us': "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition. You may return Gliscor and all cards attached to it to your hand.",
				'fr-fr': "Choisissez entre Brûlé et Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Vous pouvez reprendre Scorvol dans votre main ainsi que toutes les cartes qui lui sont attachées.",
				'de-de': "Wähle \"verbrannt\" oder \"vergiftet\". Das Verteidigende Pokémon ist jetzt vom gewählten Speziellen Zustand betroffen. Du kannst Skorgro und alle daran angelegten Karten auf deine Hand zurücknehmen."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Pester",
				'fr-fr': "Abattre",
				'de-de': "Verfolgung"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 40 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon von einem Speziellen Zustand betroffen ist, fügt dieser Angriff 40 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
		'fr-fr': "Il guette sa proie pendu à une branche la tête en bas, et s'en saisit à la première occasion."
	},

	thirdParty: {
		cardmarket: 278154,
		tcgplayer: 85771
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
		}
	]
}

export default card
