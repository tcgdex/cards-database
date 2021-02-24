import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		62,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
		fr: "Tetarte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Steamroll",
				fr: "Rouleau compresseur",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à l'un des Pokémon se trouvant sur le Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dynamic Punch",
				fr: "Dynamo-poing",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 60 damage plus 40 more damage and the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 40 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
