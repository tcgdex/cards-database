import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [301],

	hp: 90,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Power Circulation",
				'fr-fr': "Circulation de puissance",
				'de-de': "Power Circulation"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put those cards on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre pile de défausse jusqu'à 2 cartes Énergie de base. Montrez-les à votre adversaire et placez-les au dessus de votre deck dans n'importe quel ordre. Placez alors 2 marqueurs de dégât sur Delcatty. Ce pouvoir ne peut pas être utilisé si Delcatty est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Power Heal",
				'fr-fr': "Pouvoir guérissant",
				'de-de': "Power Heal"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Delcatty. Ensuite, retirez à Delcatty 2 marqueurs de dégât.",
				'de-de': "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Pouvoir guérisseur",
				'de-de': "Rear Kick"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 84741,
				cardmarket: 278425
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278425,
				tcgplayer: 84741
			}
		}
	],

}

export default card
