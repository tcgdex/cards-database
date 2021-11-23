import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Electro Recycle",
				fr: "Électro-recyclage"
			},
			effect: {
				en: "Once during your turn (before your attack), if Pichu is anywhere under Pikachu, you may search your discard pile for a Lightning Energy card, show it to your opponent, and put it into your hand. This power can't be used if Pikachu is affected by a Special Condition.",
				fr: "Une seule fois lors votre tour (avant votre attaque), si Pichu se trouve sous Pikachu, vous pouvez chercher une carte Énergie Lightning dans votre pile de défausse. Montrez-la à votre adversaire et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Pikachu est affecté par un État Spécial."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "BikaBika",
				fr: "BikeBika"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	description: {
		fr: "Il vit en forêt avec ses pairs. Il accumule l'électricité dans les poches de ses joues."
	}
}

export default card
