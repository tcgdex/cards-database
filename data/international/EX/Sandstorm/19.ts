import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Omastar",
		'fr-fr': "Amonistar",
		'de-de': "Amoroso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [139],

	hp: 110,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Omanyte",
		'fr-fr': "Amonita"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pull Down",
				'fr-fr': "Mise à terre",
				'de-de': "Pull Down"
			},
			effect: {
				'en-us': "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
				'fr-fr': "Si votre adversaire a un ou plusieurs Pokémon Évolués en jeu, retirez à chacun de ces Pokémon la carte avec le niveau d'Évolution le plus élevé et remettez-la dans la main de votre adversaire.",
				'de-de': "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydrocannon",
				'fr-fr': "Canon à O",
				'de-de': "Hydrocannon"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  attachée à Amonistar qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				'de-de': "Does 30 damage plus 20 more damage for each  Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: "30+",

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
			type: "normal",
			thirdParty: {
				cardmarket: 275796,
				tcgplayer: 87863
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275796,
				tcgplayer: 87863
			}
		},
	],

}

export default card
