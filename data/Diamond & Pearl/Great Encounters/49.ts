import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		233,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Download",
				fr: "Télécharge",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Supporter card from your hand and use the effect of that card as the effect of this power. This power can't be used if Porygon2 is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte Supporter de votre main et utiliser l'effet de cette carte comme l'effet de ce pouvoir. Ce pouvoir ne peut pas être utilisé si Porygon2 est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque vitesse",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
