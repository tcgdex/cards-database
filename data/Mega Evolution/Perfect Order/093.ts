import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Dedenne",
	},
	set: Set,
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				fr: "Générateur Caudal",
			},
			effect: {
				fr: "Choisissez dans votre pile de défausse un nombre de cartes Énergie Électrique de base inférieur ou égal à la quantité d'Énergies attachées à tous les Pokémon de votre adversaire, puis attachez-les à vos Pokémon Électrique comme il vous plaît.",
			},
		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				fr: "Éclair",
			},
			damage: "30",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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
	illustrator: "HYOGONOSUKE",

	thirdParty: {
		cardmarket: 877510
	}
}

export default card
