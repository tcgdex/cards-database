import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Minior",
		fr: "Météno",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		774,
	],
	hp: 90,
	types: [
		"Fightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Falling Star",
				fr: "Étoile Déchue",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your hand and your Bench isn't full, you may move your Active Pokémon to your Bench and play this Pokémon as your new Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si vous avez ce Pokémon dans votre main et si votre Banc n’est pas plein, vous pouvez déplacer votre Pokémon Actif vers votre Banc et jouer ce Pokémon comme nouveau Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Swift",
				fr: "Météores",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
