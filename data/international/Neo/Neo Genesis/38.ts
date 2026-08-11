import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		171,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Hydroelectric Power",
				'fr-fr': "Pouvoir hydroélectrique",
				'de-de': "Hydroelectric Power"
			},
			effect: {
				'en-us': "You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Vous pouvez augmenter de 10 le nombre de dégâts infligés par Projecteur pour chaque Énergie  attachée à Lanturn mais non utilisée pour payer le coût en Énergie de Projecteur. Ce pouvoir ne peut être utilisé si Lanturn est Endormi, Confus ou Paralysé.",
				'de-de': "You may make Floodlight do 10 more damage for each  Energy attached to Lanturn but not used to pay for Floodlight's Energy cost. This power can't be used if Lanturn is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Floodlight",
				'fr-fr': "Projecteur",
				'de-de': "Floodlight"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "The light it emits is so bright that it can illuminate the sea's surface from a depth of over three miles.",
		'fr-fr': "La lumière qu'il produit est si brillante qu'elle atteint la surface de la mer depuis plus de 5 kilomètres de profondeur."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274438,
				tcgplayer: 86603
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274438,
				tcgplayer: 86603
			}
		}
	]
}

export default card
