import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'fr-fr': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Kabuto",
		'fr-fr': "Kabuto"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Ancient Shell",
				'fr-fr': "Coquillage ancien",
				'de-de': "Uralter Panzer"
			},
			effect: {
				'en-us': "As long as you have Omanyte or Omastar in play, damage done to Kabutops by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Tant qu'Amonita ou Amonistar sont en jeu, les dégâts infligés à Kabutops par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Solange du Amonitas oder Amoroso im Spiel hast, wird jeder Schaden, der Kabutops durch Angriffe zugefügt wird, um 20 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Energy Stream",
				'fr-fr': "Courant d'énergie",
				'de-de': "Energiestrom"
			},
			effect: {
				'en-us': "Search your discard pile for a basic Energy card and attach it to Kabutops.",
				'fr-fr': "Choisissez dans votre deck une carte Énergie de base et attachez-la à Kabutops.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Basis-Energiekarte und lege sie an Kabutops an."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Claws",
				'fr-fr': "Griffes supplémentaires",
				'de-de': "Extrakrallen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276884,
		tcgplayer: 86397
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
