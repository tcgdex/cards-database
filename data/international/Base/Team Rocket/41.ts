import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Muk",
		'fr-fr': "Grotadmorv obscur",
		'de-de': "Dunkles Sleimok"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Sticky Goo",
				'fr-fr': "Boue collante",
				'de-de': "Sticky Goo"
			},
			effect: {
				'en-us': "As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Tant que Grotadmorv obscur est votre Pokémon Actif, votre adversaire paye  supplémentaires pour faire battre en retraite son Pokémon Actif. Ce pouvoir cesse de fonctionner quand Grotadmorv obscur est Endormi, Confus ou Paralysé.",
				'de-de': "As long as Dark Muk is your Active Pokémon, your opponent pays   more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused,or Paralyed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Sludge Punch",
				'fr-fr': "Point gadoue",
				'de-de': "Sludge Punch"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Muks appear suddenly, spreading sludge everywhere. Whenever one appears in a city, panic ensues.",
		'fr-fr': "Les Grotadmorv apparaissent sans prévenir, répandant de la gadoue partout. À chaque fois qu'ils apparaissent dans une cité, la panique s'ensuit."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274094,
				tcgplayer: 84630
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274094,
				tcgplayer: 84630
			}
		}
	]
}

export default card
