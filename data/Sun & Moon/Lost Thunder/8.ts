import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Meganium",
		fr: "Méganium",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 150,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
		fr: "Macronium",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Quick-Ripening Herb",
				fr: "Herbe Mûrissante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it. You can use this Ability during your first turn or on a Pokémon that was put into play this turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Choisissez l’un de vos Pokémon de base en jeu. Si vous avez dans votre main une carte de Niveau 2 qui évolue de ce Pokémon, placez-la sur le Pokémon de base pour le faire évoluer. Vous pouvez utiliser ce talent pendant votre premier tour ou sur un Pokémon qui a été joué pendant ce tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Solar Beam",
				fr: "Lance-Soleil",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
