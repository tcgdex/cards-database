import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Exeggcute",
		'fr-fr': "Nœufnœuf",
		'de-de': "Owei"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		102,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon ist jetzt schlafend."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Leech Seed",
				'fr-fr': "Vampigraine",
				'de-de': "Egelsamen"
			},
			effect: {
				'en-us': "Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.",
				'fr-fr': "À moins que tous les dégâts infligés par cette attaque ne soient prévenus, vous pouvez retirer 1 marqueur de dégâts de Nœufnœuf.",
				'de-de': "Falls nicht aller Schaden von diesem Angriff verhindert wird, kannst du eine Schadensmarke von Owei entfernen."
			},
			damage: 20,

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
		'en-us': "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
		'fr-fr': "Souvent pris pour des œufs, ils attaquent en groupe comme un essaim."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273849,
				tcgplayer: 45155
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273849,
				tcgplayer: 45155
			}
		}
	],
}

export default card
