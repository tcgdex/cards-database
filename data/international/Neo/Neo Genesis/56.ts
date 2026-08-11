import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'de-de': "Feurigel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		155,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leer",
				'fr-fr': "Groz'yeux",
				'de-de': "Leer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack Cyndaquil during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer Héricendre pendant le prochain tour de votre adversaire. (Envoyer l'un des deux Pokémon sur son Banc ou le faire évoluer met fin à cet effet.)",
				'de-de': "Flip a coin. If heads, the Defending Pokémon can't attack Cyndaquil during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
				'de-de': "Swift"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Pouvoir Pokémon ou tout autre effet sur le Pokémon Défenseur.",
				'de-de': "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.",
		'fr-fr': "Il demeure habituellement courbé en avant. S'il est en colère ou surpris, il lance des flammes depuis son dos."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274456,
				tcgplayer: 84543
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274456,
				tcgplayer: 84543
			}
		}
	]
}

export default card
