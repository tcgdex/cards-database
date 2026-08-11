import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [282],

	hp: 120,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Psychic Connect",
				'fr-fr': "Connection psy",
				'de-de': "Psychic Connect"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Psychic Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.",
				'fr-fr': "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Psychic attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Gardevoir est affecté par un État Spécial.",
				'de-de': "As often as you like during your turn (before your attack), you may move a  Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Guardevoir is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Burst",
				'fr-fr': "Explosion d'énergie",
				'de-de': "Energy Burst"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to Gardevoir and the Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Gardevoir et au Pokémon Défenseur.",
				'de-de': "Does 20 damage plus 10 more damage for each Energy attached to Guardevoir and the Defending Pokémon."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Protection",
				'fr-fr': "Protection psy",
				'de-de': "Psychic Protection"
			},
			effect: {
				'en-us': "Gardevoir has no Weakness during your opponent's next turn.",
				'fr-fr': "Gardevoir ne possède pas de Faiblesse lors du prochain tour de votre adversaire.",
				'de-de': "Guardevoir has no Weakness during your opponent's next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85636
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125076,
				cardmarket: 278429
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278429,
				tcgplayer: 85636
			}
		}
	],

}

export default card
