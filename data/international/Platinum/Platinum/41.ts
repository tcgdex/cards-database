import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Bronzong G",
		'fr-fr': "Archéodong ",
		'de-de': "Bronzong G"
	},

	illustrator: "Makoto Imai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [437],

	hp: 90,

	types: [
		"Metal"
	],

	stage: "Basic",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Galactic Switch",
				'fr-fr': "Échange galactique",
				'de-de': "Galactic Switch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon SP to another of your Pokémon. Then, put 2 damage counters on Bronzong G. This power can't be used if Bronzong G is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer une carte Énergie attachée à 1 de vos Pokémon SP sur un autre de vos Pokémon. Ensuite, placez 2 marqueurs de dégât sur Archéodong . Ce pouvoir ne peut pas être utilisé si Archéodong  est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may move an Energy card attached to 1 of your Pokémon SP to another of your Pokémon. Then, put 2 damage counters on Bronzong G. This power can't be used if Bronzong G is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Pulse",
				'fr-fr': "Vibration psy",
				'de-de': "Psychic Pulse"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire possédant des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],

	retreat: 3,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84000,
				cardmarket: 278462
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278462,
				tcgplayer: 84000
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479867
			}
		},
		{
			type:"normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480014
			}
		}
	],

}

export default card
