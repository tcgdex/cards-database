import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Transparency",
				'fr-fr': "Transparence",
				'de-de': "Durchschaubarkeit"
			},
			effect: {
				'en-us': "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
				'fr-fr': "À chaque fois qu'une attaque affecte Spectrum, lancez une pièce. Si c'est face, prévenez tous les effets de cette attaque, y compris les dégâts, infligés à Spectrum. L'effet de ce pouvoir cesse lorsque Spectrum est Endormi, Confus ou Paralysé.",
				'de-de': "Immer wenn Alpollo angegriffen wird, kannst du eine Münze werfen. Bei 'Kopf' verhindere alle Auswirkungen dieses Angriffs auf Alpollo (einschließlich der Schadenspunkte). Diese Fähigkeit verliert ihre Wirkung, solange Alpollo schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Nightmare",
				'fr-fr': "Cauchemar",
				'de-de': "Alptraum"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Because of its ability to slip through block walls, it is said to be from another dimension.",
		'fr-fr': "Il peut se glisser à travers les murs comme une créature d'une autre dimension."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273867,
				tcgplayer: 44429
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273867,
				tcgplayer: 44429
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
