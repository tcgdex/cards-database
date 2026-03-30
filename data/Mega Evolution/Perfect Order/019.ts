import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Lamantine",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	stage: "Stage1",
	evolveFrom: {
		fr: "Otaria",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Surlavage",
			},
			effect: {
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie Eau de l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Grosse Vague",
			},
			damage: "60",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Yoshioka",

	thirdParty: {
		cardmarket: 877431
	}
}

export default card
