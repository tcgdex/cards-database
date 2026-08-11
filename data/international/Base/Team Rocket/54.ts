import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'de-de': "Traumato"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Long Distance Hypnosis",
				'fr-fr': "Hypnose longue distance",
				'de-de': "Long-Distance Hypnos"
			},
			effect: {
				'en-us': "Distance Hypnosis - Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep; if tails, your Active Pokémon is now Asleep. The power can't be used if Drowzee is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi ; si c'est pile, votre Pokémon Actif est maintenant Endormi. Ce pouvoir ne peut être utilisé si Soporifik est Endormi, Confus ou Paralysé.",
				'de-de': "Once during your turn (before your attack), you may flip a coin. if heads, the defending Pokémon is now Asleep; If tails, your Active Pokémon is now Asleep. The power can't be used if Drowzee is Asleep, Confused, or Paralyzed."
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
				'de-de': "Nightmare"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Not popular with girls because of its attitude. Can often be heard muttering to itself in a low voice.",
		'fr-fr': "Il n'a pas vraiment la cote auprès des filles en raison de son mauvais caractère. On le surprend souvent maugréant tout seul à voix basse."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274107,
				tcgplayer: 84969
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274107,
				tcgplayer: 84969
			}
		}
	]
}

export default card
