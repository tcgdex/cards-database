import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Méga-Mélodelfe-ex",
	},
	set: Set,
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	stage: "Stage1",
	evolveFrom: {
		fr: "Mélofée",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Aile Luminescente",
			},
			effect: {
				fr: "Évitez tous les effets des talents des Pokémon de votre adversaire infligés à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				fr: "Tirs de Lunes",
			},
			damage: "120+",
			effect: {
				fr: "Vous pouvez défausser jusqu'à 4 cartes Énergie de votre main. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "aky CG Works",

	thirdParty: {
		cardmarket: 877445
	}
}

export default card
