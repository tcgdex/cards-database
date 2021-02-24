import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		289,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lazy",
				fr: "Fainéant",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon in play have no Abilities, except for Lazy.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon en jeu de votre adversaire n’ont pas de talent, à l’exception de Fainéant.",
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
				en: "Critical Move",
				fr: "Mouvement Décisif",
			},
			effect: {
				en: "Discard an Energy from this Pokémon. It can't attack during your next turn.",
				fr: "Défaussez une Énergie de ce Pokémon. Il ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
