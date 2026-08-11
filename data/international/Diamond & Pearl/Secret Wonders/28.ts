import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'de-de': "Entoron"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Encore",
				'fr-fr': "Encore",
				'de-de': "Zugabe"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can use only that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut utiliser que cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann im nächsten Zug deines Gegners nur den gewählten Angriff einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Psychic",
			],
			name: {
				'en-us': "Break Beam",
				'fr-fr': "Rayon brisant",
				'de-de': "Unterbrecherstrahl"
			},
			effect: {
				'en-us': "You may do 40 damage plus 20 more damage. If you do, Golduck is now Confused.",
				'fr-fr': "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Akwakwak devient alors Confus.",
				'de-de': "Du kannst diesen Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zufügen lassen. Wenn du das machst, ist Entoron jetzt verwirrt."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that lives in lakes. It swims faster than any human swimming champion.",
	},

	thirdParty: {
		cardmarket: 277781,
		tcgplayer: 85815
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
