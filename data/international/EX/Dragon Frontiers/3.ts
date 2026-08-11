import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Heracross δ",
		'fr-fr': "Scarhino δ",
		'de-de': "Skaraborn"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Shining Horn",
				'fr-fr': "Corne brillante",
				'de-de': "Glänzendes Horn"
			},
			effect: {
				'en-us': "As long as Heracross is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
				'fr-fr': "Tant que Scarhino est le seul Pokémon que vous ayez en jeu, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				'de-de': "Solange Skaraborn das einzige Pokémon ist, das du im Spiel hast, können die Basis-Pokémon deines Gegners nicht angreifen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dig Deep",
				'fr-fr': "Trou profond",
				'de-de': "Tief graben"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main.",
				'de-de': "Durchsuche deinen Ablagestapel nach einer Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Extra Claws",
				'fr-fr': "Griffes supplémentaires",
				'de-de': "Extrakrallen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277208
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
