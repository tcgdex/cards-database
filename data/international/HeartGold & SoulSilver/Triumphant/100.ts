import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Darkrai & Cresselia LEGEND",
		'fr-fr': "Darkrai & Cresselia LÉGENDE",
		'de-de': "Darkrai & Cresselia LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [488, 491],
	types: [
		"Darkness",
		"Psychic"
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lost Crisis",
				'fr-fr': "Crise perdue",
				'de-de': 'Nirgendwo-Krise'
			},
			effect: {
				'en-us': "Choose 2 Energy attached to Darkrai & Cresselia LEGEND and put them in the Lost Zone. If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
				'fr-fr': "Choisissez 2 cartes Énergie attachées à Darkrai & Cresselia LÉGENDE et placez-les dans la Zone Perdue. Si l’un des Pokémon de votre adversaire est mis K.O. par cette attaque, placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de le défausser.",
				'de-de': 'Wähle 2 an Darkrai- & Cresselia-LEGENDE angelegte Energiekarten und lege sie ins Nirgendwo. Wenn ein Pokémon deines Gegners durch diesen Angriff kampfunfähig würde, lege dieses Pokémon und alle daran angelegten Karten nicht auf den Ablagestapel, sondern ins Nirgendwo.'
			},
			damage: 100,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Moon’s Invite",
				'fr-fr': "Invitation lunaire",
				'de-de': 'Mondeinladung'
			},
			effect: {
				'en-us': "Move as many damage counters on your opponent’s Pokémon as you like to any of your opponent’s other Pokémon in any way you like.",
				'fr-fr': "Retirez autant de marqueurs de dégât que vous le voulez aux Pokémon de votre adversaire et attribuez-les comme bon vous semble aux autres Pokémon de votre adversaire.",
				'de-de': 'Verschiebe beliebig viele Schadensmarken von Pokémon deines Gegners in beliebiger Verteilung auf andere gegnerische Pokémon.  '
			},

		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic",

	hp: 150,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84704,
				cardmarket: 279629
			}
		},
	],

}

export default card
