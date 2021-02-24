import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Leavanny",
		fr: "Manternel",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		542,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Coordinate",
				fr: "Composition",
			},
			effect: {
				en: "Choose up to 2 of your Benched Pokémon that have no Pokémon Tools attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez jusqu'à 2 de vos Pokémon de Banc qui n'ont pas de carte Outil Pokémon leur étant attachée. Pour chacun des Pokémon choisis, cherchez une carte Outil Pokémon dans votre deck et attachez-la au Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempête Verte",
			},
			effect: {
				en: "Heal 20 damage from each of your Grass Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
