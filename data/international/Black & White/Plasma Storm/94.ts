import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'de-de': "Shardrago"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 110,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.",
	},

	thirdParty: {
		cardmarket: 280834,
		tcgplayer: 84982
	}
}

export default card
