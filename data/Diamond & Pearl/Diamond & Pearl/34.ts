import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "See Beyond",
				fr: "Clairvoyant",
			},
			effect: {
				en: "Choose a card from your hand and put it as a Prize card face up. Then, choose 1 of your face-down Prize cards without looking and put it into your hand. This attack does nothing if all of your Prize cards are face up.",
				fr: "Choisissez une carte de votre main et placez-la comme carte Récompense, face retournée. Choisissez alors 1 de vos cartes Récompense se trouvant face cachée et placez-la dans votre main. Cette attaque est sans effet si toutes vos cartes Récompense sont retournées.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extrasensory",
				fr: "Extrasenseur",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 50 more damage.",
				fr: "Si vous avez le même nombre de cartes en main que votre adversaire, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
