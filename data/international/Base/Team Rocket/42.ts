import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Persian",
		'fr-fr': "Persian obscur",
		'de-de': "Dunkles Snobilikat"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fascinate",
				'fr-fr': "Fascination",
				'de-de': "Fascinate"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. This attack can't be used if your opponent has no Benched Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 des Pokémon du Banc de votre adversaire et échangez-le avec le Pokémon Défenseur. Cette attaque ne peut être utilisée si votre adversaire n'a pas de Pokémon sur son Banc.",
				'de-de': "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. This attack can't be used if our opponent has no benched Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Poison Claws",
				'fr-fr': "Griffes empoisonnées",
				'de-de': "Poison Claws"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémonis now Poisoned."
			},

			damage: 10
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

	description: {
		'en-us': "Popular with women because of its beautiful fur. The leader of the Rockets keeps one as a pet.",
		'fr-fr': "Les femmes l'adorent en raison de sa magnifique fourrure. Le chef des Rocket en possède un comme animal de compagnie."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274095,
				tcgplayer: 84639
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274095,
				tcgplayer: 84639
			}
		}
	]
}

export default card
