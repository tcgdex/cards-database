import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'de-de': "Flunkifer"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [303],

	hp: 60,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Selfish Draw",
				'fr-fr': "Pioche égoïste",
				'de-de': "Ego-Zug"
			},
			effect: {
				'en-us': "Look at the top card of your deck. You may put it into your hand. If not, discard it and draw a card.",
				'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez l'ajouter à votre main. Sinon, défaussez-la et piochez une carte.",
				'de-de': "Schau dir die oberste Karte deines Decks an. Du darfst sie auf die Hand nehmen. Wenn du das nicht tust, lege sie auf deinen Ablagestapel und ziehe eine Karte."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Destructive Jaw",
				'fr-fr': "Mâchoire destructrice",
				'de-de': "Zerstörermaul"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et vous devez défausser une Énergie qui lui est attachée.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt und lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87264,
				cardmarket: 279707
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87264,
				cardmarket: 279707
			},
		},
	],

}

export default card
