import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},
	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Limbo Limbo",
				fr: "Limbo Limbo",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Alolan Club",
				fr: "Club d’Alola",
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon in play that has Alolan in its name.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu avec « d’Alola » dans son nom.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
