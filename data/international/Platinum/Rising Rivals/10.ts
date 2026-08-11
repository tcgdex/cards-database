import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Mismagius GL",
		'fr-fr': "Magirêve  Niv. 26",
		'de-de': "Traunmagil GL"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [429],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Removal",
				'fr-fr': "Psycho-suppression",
				'de-de': "Telepathisches Entfernen"
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si ce sont 2 faces, défaussez toute l'Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 2 Münzen. Wenn beide Münzen \"Kopf\" gezeigt haben, lege alle Energien, die am Verteidigenden Pokémon angelegt sind, auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Grudge",
				'fr-fr': "Rancune",
				'de-de': "Nachspiel"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Prize card your opponent has taken.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récolté.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jeden Preis, den dein Gegner bereits genommen hat, zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278584,
				tcgplayer: 87521
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278584,
				tcgplayer: 87521
			}
		},
	],

}

export default card
