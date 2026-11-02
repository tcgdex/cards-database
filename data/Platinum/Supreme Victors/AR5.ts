import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		fr: "Arceus",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				fr: "Vague menaçante",
			},
			effect: {
				fr: "Si vous avez 6 Arceus en jeu et que chacun de ces Arceus est de type différent, choisissez jusqu'à 6 cartes Énergie de base dans votre deck. Attachez chacune de ces cartes Énergie à un autre Pokémon que vous avez en jeu. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Lance céleste",
			},
			effect: {
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 80 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Retirez à Arceus toutes ses cartes Énergie et placez-les dans la Zone Perdue.",
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83596
			}
		}
	]
}

export default card
