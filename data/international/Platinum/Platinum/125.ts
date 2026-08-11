import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Palkia G LV.X",
		'fr-fr': "Palkia ",
		'de-de': "Palkia G"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [484],

	hp: 120,

	types: [
		"Water"
	],

	stage: "LEVEL-UP",
	suffix: "SP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Lost Cyclone",
				'fr-fr': "Cyclone perdu",
				'de-de': "Lost Cyclone"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may use this power. Any player who has 4 or more Benched Pokémon chooses 3 of his or her Benched Pokémon. Put the other Benched Pokémon and all cards attached to them in the Lost Zone. (You choose your Pokémon first.) This power can't be used it Palkia G is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Les joueurs possédant au moins 4 Pokémon de Banc choisissent 3 de leur Pokémon de Banc. Placez les autres Pokémon de Banc ainsi que toutes les cartes qui leur sont attachées dans la Zone Perdue. (Vous choisissez vos Pokémon en premier.) Ce pouvoir ne peut pas être utilisé si Palkia  est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may use this power. Any player who has 4 or more Benched Pokémon chooses 3 of his or her Benched Pokémon. Put the other Benched Pokémon and all cards attached to them in the Lost Zone. (You choose your Pokémon first.) This power can't be used if Palkia G is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Shot",
				'fr-fr': "Hydro-coup",
				'de-de': "Hydro Shot"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Palkia G. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies attachées à Palkia . Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Discard 2 Energy attached to Palkia G. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 87918,
				cardmarket: 278546
			}
		}
	]
}

export default card
