import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix Niv. 14",
		'de-de': "Knacklion"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [328],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Gather Sand",
				'fr-fr': "Groupement de sable",
				'de-de': "Sand sammeln"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Trapinch is your Active Pokémon, you may search your discard pile for a basic Fighting card and attach it to Trapinch.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), si Kraknoix est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Fighting et l'attacher à Kraknoix.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Knacklion dein Aktives Pokémon ist, deinen Ablagestapel nach 1 -Basis-Energiekarte durchsuchen und sie an Knacklion anlegen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'fr-fr': "Écrase",
				'de-de': "Zermahlen"
			},
			effect: {
				'en-us': "Does 10 damage times the amount of Energy attached to Trapinch.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Kraknoix.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der an Knacklion angelegten Energien zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It makes a conical pit in desert sand and lies in wait at the bottom for prey to come tumbling down."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278658,
				tcgplayer: 90024
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278658,
				tcgplayer: 90024
			}
		},
	],

}

export default card
