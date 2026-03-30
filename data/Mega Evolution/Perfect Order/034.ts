import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Mistigrix",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	stage: "Stage1",
	evolveFrom: {
		fr: "Psystigri",
	},
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Affolement",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Psyko",
			},
			damage: "30+",
			effect: {
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Kannnu",

	thirdParty: {
		cardmarket: 877448
	}
}

export default card
