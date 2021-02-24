import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Regirock",
		fr: "Regirock",
	},
	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		377,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Regi Cycle",
				fr: "Regi-cycle",
			},
			effect: {
				en: "Once during your turn (before your attack), if you have a Fighting Energy card in your discard pile, you may discard 2 cards from your hand. Then, attach a Fighting Energy card from your discard pile to Regirock. This power can't be used if Regirock is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez une carte Énergie Fighting dans votre pile de défausse, vous pouvez défausser 2 cartes de votre main. Ensuite, attachez une carte Énergie Fighting de votre pile de défausse sur Regirock. Ce pouvoir ne peut pas être utilisé si Regirock est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
