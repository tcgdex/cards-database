import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		417,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Overshort",
				fr: "Surcircuiter",
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent's Active Pokémon. If you discarded a Pokémon Tool card in this way, this attack does 40 more damage, and your opponent's Active Pokémon is now Paralyzed.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire. Si vous avez défaussé une carte Outil Pokémon de cette façon, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
