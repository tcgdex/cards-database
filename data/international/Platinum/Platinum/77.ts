import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Honchkrow G",
		'fr-fr': "Corboss ",
		'de-de': "Kramshef G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [430],

	hp: 80,

	types: [
		"Darkness"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{

			name: {
				'en-us': "Honcho's Command",
				'fr-fr': "L'ordre d'Honcho",
				'de-de': "Honcho's Command"
			},
			effect: {
				'en-us': "Search your deck for up to 2 in any combination of Stadium cards or Trainer cards that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck n'importe quelle combinaison de jusqu'à 2 cartes Stade ou cartes Dresseur dont le nom comporte Invention de Team Galaxie. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2 in any combination of Stadium cards or Trainer cards that has Team Galactic's Invention in its name, show them to your opponent, and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Target Attack",
				'fr-fr': "Attaque ciblée",
				'de-de': "Target Attack"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If that Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Si ce Pokémon possède déjà des marqueurs de dégât, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. If that Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86164,
				cardmarket: 278498
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278498,
				tcgplayer: 86164
			}
		},
		{
			type:"normal",
			stamp: ["tsubasa-nakamura"],
			thirdParty: {
				tcgplayer: 479905
			}
		}
	],

}

export default card
