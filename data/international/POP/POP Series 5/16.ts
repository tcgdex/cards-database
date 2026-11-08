import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Espeon ★",
		'fr-fr': "Mentali ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [196],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Purple Ray",
				'fr-fr': "« Rayon violet »"
			},
			effect: {
				'en-us': "Once during your turn, when you put Espeon Star from your hand onto your Bench, you may use this power. Each Active Pokémon (both yours and your opponent's) is now Confused.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Mentali ☆ de votre main sur votre Banc, vous pouvez utiliser ce pouvoir. Chaque Pokémon Actif (les vôtres et ceux de votre adversaire) est maintenant Confus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Boom",
				'fr-fr': "Psycho-boom"
			},
			effect: {
				'en-us': "Does 30 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
				'fr-fr': "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85329,
			},
		},
	],

}

export default card
