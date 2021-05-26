import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Grimmsnarl",
		fr: "Angoliath"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Morgrem",
		fr: "Fourbelin"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Oath",
				fr: "Serment Obscur"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent’s Active Pokémon’s attacks cost Colorless more.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Press",
				fr: "Pression Énergétique"
			},
			effect: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Darkness"]
}

export default card
