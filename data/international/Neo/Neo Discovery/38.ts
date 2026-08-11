import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'de-de': "Evoli"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Energy Evolution",
				'fr-fr': "Évolution de l'Énergie",
				'de-de': "Energy Evolution"
			},
			effect: {
				'en-us': "Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Quand vous attachez une carte Énergie à Évoli, lancez une pièce. Si c'est face, cherchez dans votre deck une carte Évolution d'Évoli qui est du même type que la carte Énergie que vous venez de lui attacher. Attachez aussi cette carte à Évoli. Cela revient à le faire évoluer. Mélangez ensuite votre deck. Ce pouvoir ne peut être utilisé si Évoli est Endormi, Confus ou Paralysé.",
				'de-de': "Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for a card that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Attach that card to Eevee. This counts as evolving Eevee. Shuffle your deck afterward. This power can't be used if Eevee is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Ruade",
				'de-de': "Smash Kick"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its irregularly configured DNA is affected by its surroundings. It evolves if its environment changes.",
		'fr-fr': "Son ADN instable est affecté par son environnement. Il évolue en fonction des changements de son habitat."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274549,
				tcgplayer: 85075
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274549,
				tcgplayer: 85075
			}
		}
	]
}

export default card

