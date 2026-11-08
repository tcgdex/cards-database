import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Spiritomb",
		'de-de': "Kryppuk"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [442],
	
	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Keystone Seal",
				'de-de': "Spiritkern-Siegel"
			},
			effect: {
				'en-us': "As long as Spiritomb is your Active Pokémon, each player can't play any Trainer cards from his or her hand.",
				'de-de': "Solange Kryppuk dein Aktives Pokémon ist, kann kein Spieler Trainerkarten von seiner Hand spielen."
			}
		},
	],

	attacks: [
		{

			name: {
				'en-us': "Darkness Grace",
				'de-de': "Gnade der Finsternis"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Spiritomb. Shuffle your deck afterward.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf dieses Pokémon. (Dies zählt als Entwickeln von diesem Pokémon.) Wenn du das machst, lege 1 Schadensmarke auf Kryppuk. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Will-o'-the-wisp",
				'de-de': "Irrlicht"
			},

			damage: 10,

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278904,
		tcgplayer: 89466
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89466
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89466
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				tcgplayer: 164282
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480112
			}
		}
	]
}

export default card
