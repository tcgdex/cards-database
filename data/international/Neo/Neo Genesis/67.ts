import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Koud'bec",
				'de-de': "Peck"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Télékinésie",
				'de-de': "Telekinesis"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 20 dégâts à ce Pokémon. Ne pas appliquer la Faiblesse et la Résistance à cette attaque. (Tout autre effet ou attaque qui survient après application de la Faiblesse et de la Résistance est toujours valide.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
			}
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "Because its wings aren't yet fully grown, it has to hop to get around. It is always staring at something.",
		'fr-fr': "Comme ses ailes ne sont pas complètement développées, il doit sauter pour se déplacer. Il observe toujours quelque chose."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274467,
				tcgplayer: 87681
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274467,
				tcgplayer: 87681
			}
		}
	]
}

export default card
