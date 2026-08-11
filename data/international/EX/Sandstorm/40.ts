import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy",
				'de-de': "Psychoshock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Link Blast",
				'fr-fr': "Explosion en série",
				'de-de': "Vereinigende Explosion"
			},
			effect: {
				'en-us': "If Kirlia and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 30 instead of 60.",
				'fr-fr': "Si Kirlia et le Pokémon Défenseur ont un total d'Énergie différent, les dégâts de base de cette attaque sont de 30 et non de 60.",
				'de-de': "Wenn an Kirlia und dem Verteidigenden Pokémon unterschiedlich viel Energie angelegt ist, beträgt der Grundschaden dieses Angriffs 30 statt 60."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275817,
				tcgplayer: 86461
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275817,
				tcgplayer: 86461
			}
		},
	],

}

export default card
