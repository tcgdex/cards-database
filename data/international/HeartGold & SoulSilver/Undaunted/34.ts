import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'de-de': "Rattikarl"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [20],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Razor-Sharp Incisors",
				'fr-fr': "Incisives aiguisées",
				'de-de': "Scharfe Schneidezähne"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur le Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf dem Verteidigenden Pokémon zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw Up",
				'fr-fr': "Rongetout",
				'de-de': "Zernagen"
			},
			effect: {
				'en-us': "Discard a Special Energy card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
				'de-de': "Lege 1 Spezialenergiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279287,
				tcgplayer: 88606
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279287,
				tcgplayer: 88606
			}
		}
	],

}

export default card
