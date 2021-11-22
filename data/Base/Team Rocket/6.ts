import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Dugtrio",
		fr: "Triopikeur obscur"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Diglett",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Sinkhole",
				fr: "Chausse-trappe"
			},
			effect: {
				en: "Whenever your opponent's Active Pokémon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokémon. (Don't apply Weakness and Resistance.) This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.",
				fr: "Chaque fois que le Pokémon Actif de votre adversaire bat en retraite, votre adversaire lance une pièce. Si c'est pile, ce pouvoir inflige 20 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance). Ce pouvoir cesse de fonctionner lorsque Triopikeur obscur est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Knock Down",
				fr: "Renversement"
			},
			effect: {
				en: "Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.",
				fr: "Votre adversaire lance une pièce. Si c'est pile, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires ; si c'est face, cette attaque inflige 20 dégâts."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "Il creuse de larges pièges dans le sol afin d'attraper ses ennemis."
	}
}

export default card
