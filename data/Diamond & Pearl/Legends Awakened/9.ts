import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Piloswine",
		fr: "Keifel",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Fang",
				fr: "Crocs Givre",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et défaussez une carte Énergie attachée au Pokémon Défenseur.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Charge Through",
				fr: "Charge transperçante",
			},
			effect: {
				en: "You may do 60 damage plus 40 more damage and 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If you do, Mamoswine does 40 damage to itself.",
				fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires et 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Mammochon s'inflige alors 40 dégâts.",
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+40"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		fr: "Ses défenses spectaculaires sont glacées. Il a failli disparaître dans la canicule suivant l'ère glaciaire."
	}
}

export default card
