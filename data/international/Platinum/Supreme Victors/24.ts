import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Dewgong",
		'fr-fr': "Lamantine",
		'de-de': "Jugong"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [87],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Seel",
		'fr-fr': "Otaria"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Thick Fat",
				'fr-fr': "Isograisse",
				'de-de': "Speckschicht"
			},
			effect: {
				'en-us': "Any damage done to Dewgong by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à Lamantine par des attaques de Pokémon Fire et Water sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Schaden, der Jugong durch Angriffe von - und -Pokémon zugefügt wird, wird um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Shard",
				'fr-fr': "Éclats glace",
				'de-de': "Eissplitter"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Fighting Pokémon, this attack's base damage is 80 instead of 30.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Fighting, les dégâts de base de cette attaque sont de 80 au lieu de 30.",
				'de-de': "Wenn das Verteidigende Pokémon ein -Pokémon ist, beträgt der Grundschaden dieses Angriffs 80 Schadenspunkte anstelle von 30 Schadenspunkten."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Beam",
				'fr-fr': "Onde boréale",
				'de-de': "Aurorastrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278715,
				tcgplayer: 84791,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278715,
				tcgplayer: 84791
			}
		},
	],

}

export default card
