import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Mawile",
		fr: "Mysdibule",
		de: "Flunkifer"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Selfish Draw",
				fr: "Pioche égoïste",
				de: "Ego-Zug"
			},
			effect: {
				en: "Look at the top card of your deck. You may put it into your hand. If not, discard it and draw a card.",
				fr: "Regardez la carte du dessus de votre deck. Vous pouvez l’ajouter à votre main.  Sinon, défaussez-la et piochez une carte.",
				de: "Schau dir die oberste Karte deines Decks an. Du darfst sie auf die Hand nehmen. Wenn du das nicht tust, lege sie auf deinen Ablagestapel und ziehe eine Karte."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Jaw",
				fr: "Mâchoire destructrice",
				de: "Zerstörermaul"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé et vous devez défausser une carte Énergie qui lui est attachée.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt und lege eine Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
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
		en: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279309,
		tcgplayer: 87263
	}
}

export default card
