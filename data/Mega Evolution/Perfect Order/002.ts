import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Migalos",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	stage: "Stage1",
	evolveFrom: {
		fr: "Mimigal",
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				fr: "Anneau de Poison",
			},
			damage: "50",
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "svlt",

	thirdParty: {
		cardmarket: 877414
	}
}

export default card
