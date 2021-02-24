import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Floatzel",
		fr: "Mustéflott",
	},
	illustrator: "Masahiko Ishii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		419,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Buizel",
		fr: "Mustébouée",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Screw Tail",
				fr: "Queue cloutée",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au  Pokémon Défenseur.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},
			effect: {
				en: "Does 40 damage plus 20 more damage for each Water Energy attached to Floatzel but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				fr: "Inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque Énergie Water attachée à Mustéflottqui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
