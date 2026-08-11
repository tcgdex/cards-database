import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Swalot",
		'fr-fr': "Avaltout",
		'de-de': "Schlukwech"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		317,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gulpin",
		'fr-fr': "Schluppuck",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Swallow Up",
				'fr-fr': "Engloutir",
				'de-de': "Runterschlucken"
			},
			effect: {
				'en-us': "Before doing damage, count the remaining HP of the Defending Pokémon and Swalot. If the Defending Pokémon has fewer remaining HP than Swalot's, this attack does 80 damage instead.",
				'fr-fr': "Avant d'infliger des dégâts, comptez le nombre de PV restants au Pokémon Défenseur ainsi qu'à Avaltout. Si le Pokémon Défenseur possède moins de PV qu'Avaltout, cette attaque inflige 80 dégâts.",
				'de-de': "Bevor der Schaden zugefügt wird, vergleiche die verbliebenen KP von dem Verteidigenden Pokémon und Schlukwech. Wenn das Verteidigende Pokémon weniger verbliebene KP hat als Schlukwech, fügt dieser Angriff 80 Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Gunk Shot",
				'fr-fr': "Détricanon",
				'de-de': "Mülltreffer"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It swallows anything whole. It sweats toxic fluids from its follicles to douse foes.",
		'fr-fr': "Il avale tout en une bouchée. Ses follicules sécrètent des fluides toxiques qui endorment l'ennemi."
	},

	thirdParty: {
		cardmarket: 278221,
		tcgplayer: 89673
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
