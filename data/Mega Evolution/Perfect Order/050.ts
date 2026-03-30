import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Ectoplasma",
	},
	set: Set,
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	stage: "Stage2",
	evolveFrom: {
		fr: "Spectrum",
	},
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Ombre Infinie",
			},
			effect: {
				fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, ajoutez-le à votre main plutôt que de le placer dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				fr: "Emprise Mentale",
			},
			damage: "10+",
			effect: {
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Masako Tomii",

	thirdParty: {
		cardmarket: 877465
	}
}

export default card
