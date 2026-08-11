import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'de-de': "Psiana"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [196],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Return",
				'fr-fr': "Retour d'énergie",
				'de-de': "Energy Return"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), choose an Energy card attached to 1 of your Pokémon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition.",
				'fr-fr': "Aussi souvent que vous le désirez pendant votre tour (avant votre attaque), vous pouvez prendre une carte Énergie attachée à l'un de vos Pokémon et la renvoyer dans votre main. Ce pouvoir ne peut pas être utilisé si Mentali est affecté par un État spécial.",
				'de-de': "As often as you like during your turn (before your attack), choose an Energy card attached to 1 of your Pokémon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Damage Blast",
				'fr-fr': "Mega dégâts",
				'de-de': "Damage Blast"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de marqueurs de dégâts sur le Pokémon Défenseur. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
				'de-de': "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads."
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
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85317,
				cardmarket: 275083
			}
		},
	],
	retreat: 0
}

export default card
