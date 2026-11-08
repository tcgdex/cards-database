import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'de-de': "Shuppet"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [353],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Disable",
				'fr-fr': "Entrave",
				'de-de': "Aussetzer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, choisissez l’une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'de-de': "Wirf eine Münze. Wähle bei \"Kopf\" 1 Angriff des Verteidigenden Pokémon. Das Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Haunt",
				'fr-fr': "Hanter",
				'de-de': "Spuk"
			},
			effect: {
				'en-us': "Put 1 damage counter on the Defending Pokémon.",
				'fr-fr': "Placez un marqueur de dégât sur le Pokémon Défenseur.",
				'de-de': "Lege 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses its horn to feed on envy and malice, or so it’s said. It’s very active at night."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89202,
				cardmarket: 279605
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279605,
				tcgplayer: 89202
			}
		},
	],

}

export default card
