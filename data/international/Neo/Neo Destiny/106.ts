import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Shining Celebi",
		'fr-fr': "Celebi brillant",
		'de-de': "Schimmerndes Celebi"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Healing Water",
				'fr-fr': "Eau de soin",
				'de-de': "Heilendes Wasser"
			},
			effect: {
				'en-us': "Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.",
				'fr-fr': "Retirez un nombre de marqueurs de dégâts sur un des Pokémon de votre Banc égal au nombre d'Énergies  attachées à Celebi brillant. Si le Pokémon a moins de marqueurs de dégâts, retirez-les tous.",
				'de-de': "Entferne so viele Schadensmarken von einem deiner Pokémon auf deiner Bank, wie -Energie an Schimmerndes Celebi angelegt sind. Wenn dieses Pokémon weniger Schadensmarken hat, entferne alle."
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
			],

			name: {
				'en-us': "Miracle Leaf",
				'fr-fr': "Feuille miracle",
				'de-de': "Wunderblatt"
			},

			effect: {
				'en-us': "Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon Défenseur. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Endormi, Confus ou Empoisonné (selon votre choix).",
				'de-de': "Wirf so viele Münzen, wie Energiekarten an das verteidigende Pokémon angelegt sind. Wenn mindestens einmal 'Kopf' fällt, wählst du, ob das verteidigende Pokémon jetzt verwirrt oder vergiftet ist oder schläft."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is worshipped as a god of the forest. It appears only in undisturbed old-growth forests.",
		'fr-fr': "Il est adoré comme un dieu de la forêt. Il n'apparaît que dans des forêts anciennes et paisibles."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274758,
				tcgplayer: 89162
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274758,
				tcgplayer: 89162
			}
		}
	]
}

export default card
