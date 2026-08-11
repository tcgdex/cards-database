import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Arcanine G",
		'fr-fr': "Arcanin ",
		'de-de': "Arkani G"
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [59],
	hp: 90,
	types: [
		"Fire"
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extreme Speed",
				'fr-fr': "Vitesse extrême",
				'de-de': "Turbotempo"
			},
			effect: {
				'en-us': "Arcanine G's Retreat Cost is Colorless less for each Fire Energy attached to Arcanine G.",
				'fr-fr': "Le Coût de retraite d'Arcanin  est Colorless de moins pour chaque Énergie Fire attachée à Arcanin .",
				'de-de': "Die Rückzugskosten von Arkani G verringern sich für jede -Energie, die an Arkani G angelegt ist, um ."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Overrun",
				'fr-fr': "Dépassement",
				'de-de': "Überrennen"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278706,
				tcgplayer: 83591
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 371545,
				tcgplayer: 83591
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 95826
			}
		},
	],

}

export default card
