import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'de-de': "Glibunkel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		453,
	],

	hp: 60,

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
				'en-us': "Ghastly Sound",
				'fr-fr': "Son affreux",
				'de-de': "Grässliche Geräusche"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent can't play any Supporter cards from his or her hand during his or her next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Supporter de sa main lors de son prochain tour.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' kann dein Gegner in seinem nächsten Zug keine Unterstützerkarten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Finger Poke",
				'fr-fr': "Du bout du doigt",
				'de-de': "Fingerstubser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Its cheeks hold poison sacs. It tries to catch foes off guard to jab them with toxic fingers.",
		'fr-fr': "Ses joues contiennent des glandes toxiques. Il attaque par surprise et utilise son toucher empoisonné."
	},

	thirdParty: {
		cardmarket: 277707,
		tcgplayer: 84473
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
