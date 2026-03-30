import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Boumata",
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Carapace à Piques",
			},
			effect: {
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de l'un des Pokémon de votre adversaire (même si ce Pokémon est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Souffle Ardent",
			},
			damage: "80+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 80 dégâts supplémentaires.",
			},
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Hasuno",

	thirdParty: {
		cardmarket: 877429
	}
}

export default card
