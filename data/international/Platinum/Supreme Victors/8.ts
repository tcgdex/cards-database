import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Rayquaza C",
		'fr-fr': "Rayquaza ",
		'de-de': "Rayquaza C"
	},
	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",

	set: Set,
	dexId: [384],
	hp: 100,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Trash Burst",
				'fr-fr': "Coup de poubelle",
				'de-de': "Abfallexplosion"
			},
			effect: {
				'en-us': "You may discard up to 5 Energy cards from your hand. If you do, this attack does 10 damage plus 10 more damage for each Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser jusqu'à 5 cartes Énergie de votre main. Cette attaque inflige alors 10 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie défaussée.",
				'de-de': "Du kannst bis zu 5 Energiekarten von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede auf diese Weise auf den Ablagestapel gelegte Energiekarte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Twister",
				'fr-fr': "Ouragan",
				'de-de': "Windhose"
			},
			effect: {
				'en-us': "Flip 2 coins. If both are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
				'fr-fr': "Lancez 2 pièces. Si ce sont deux piles, cette attaque est sans effet. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 2 Münzen. Wenn beide \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen. Lege pro \"Kopf\" eine an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278690,
				tcgplayer: 88639
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278690,
				tcgplayer: 88639
			}
		},
	],

}

export default card
