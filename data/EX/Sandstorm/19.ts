import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Omastar",
		fr: "Amonistar",
		de: "Amoroso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull Down",
				fr: "Mise à terre",
				de: "Pull Down"
			},
			effect: {
				en: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand.",
				fr: "Si votre adversaire a un ou plusieurs Pokémon Évolués en jeu, retirez à chacun de ces Pokémon la carte avec le niveau d'Évolution le plus élevé et remettez-la dans la main de votre adversaire.",
				de: "If your opponent has any Evolved Pokémon in play, remove the highest Stage Evolution card from each of them and put those cards back into his or her hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydrocannon",
				fr: "Canon à O",
				de: "Hydrocannon"
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Water Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  attachée à Amonistar qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				de: "Does 30 damage plus 20 more damage for each  Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
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

	thirdParty: {
		cardmarket: 275796,
		tcgplayer: 87863
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
