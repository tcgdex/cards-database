import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Super Potion",
		'fr-fr': "Super Potion",
		'de-de': "Supertrank",
		'it-it': "Super Pozione Magica"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Discard 1 Energy card attached to your own Pokémon in order to remove up to 4 damage counters from that Pokémon.",
		'fr-fr': "Défaussez 1 carte Énergie attachée à 1 de vos propres Pokémon afin de retirer jusqu'à 4 marqueurs de dégâts de ce Pokémon.",
		'de-de': "Entferne eine auf einem Deiner Pokémon abgelegte Energiekarte, um das Pokémon von bis zu vier Schadensmarken zu befreien.",
		'it-it': "Scarta una carta Energia assegnata a uno dei tuoi Pokémon per poter togliere al massimo 4 segnalini danno da quel Pokémon."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273785,
				tcgplayer: 42434
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107087
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107087
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
