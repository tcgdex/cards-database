import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Aerodactyl",
		'fr-fr': "Ptera",
		'de-de': "Aerodactyl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		142,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Old Amber",
		'fr-fr': "Vieil Ambre",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Claw",
				'fr-fr': "Griffe primitive",
				'de-de': "Urzeitklaue"
			},
			effect: {
				'en-us': "After your opponent's Pokémon uses a Poké-Power, put 2 damage counters on that Pokémon.",
				'fr-fr': "Une fois que le Pokémon de votre adversaire a utilisé un Poké-Power, placez 2 marqueurs de dégât sur ce Pokémon.",
				'de-de': "Nachdem ein Pokémon deines Gegners eine Poké-Power benutzt hat, lege 2 Schadensmarken auf dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Supersonic",
				'fr-fr': "Ultrason",
				'de-de': "Superschall"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.",
	},

	thirdParty: {
		cardmarket: 278064,
		tcgplayer: 83469
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
