import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'de-de': "Entoron"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psyschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das vertdigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				'fr-fr': "Si des cartes Énergies sont attachées au Pokémon, choisissez l'une d'elle et défaussez-la.",
				'de-de': "Falls das vertdigende Pokémon irgendwelche darauf abgelegten Energiekarten hat, wähle eine von ihnen und entferne sie."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
		'fr-fr': "Il nage avec élégance le long des côtes. Il est souvent confondu avec le monstre japonais: Kappa."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273896,
				tcgplayer: 44437
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273896,
				tcgplayer: 44437
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
