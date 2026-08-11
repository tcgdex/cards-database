import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Tunneling",
				'fr-fr': "Creuser un tunnel",
				'de-de': "Tunnelbau"
			},
			effect: {
				'en-us': "Choose up to 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) Onix can't attack during your next turn.",
				'fr-fr': "Choisissez jusqu'à 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance au Pokémon de Banc.) Onix ne peut pas attaquer lors de votre prochain tour.",
				'de-de': "Wähle bis zu 2 Pokémon auf der Bank deines Gegners. Dieser Angriff fügt den gewählten Pokémon jeweils 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Onix kann in deinem nächsten Zug nicht angreifen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When it travels underground, it causes rumbling and tremors. It can move at 50 mph.",
		'fr-fr': "Il provoque des secousses sismiques en creusant. Il peut atteindre les 80 km/h."
	},

	thirdParty: {
		cardmarket: 277591,
		tcgplayer: 87882
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
