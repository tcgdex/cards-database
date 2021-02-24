import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		576,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magic Room",
				fr: "Zone Magique",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Madkinesis",
				fr: "Mentalisme",
			},
			effect: {
				en: "Does 20 more damage for each Psychic Energy attached to this Pokémon.",
				fr: "Inflige 20 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
