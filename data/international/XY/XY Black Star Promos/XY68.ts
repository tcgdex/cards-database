import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Chesnaught",
		'fr-fr': "Blindépique",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 160,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spike Lariat",
				'fr-fr': "Lasso à Piques",
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "60+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Adamantine Press",
				'fr-fr': "Charge Adamantine"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
	},

	thirdParty: {
		cardmarket: 553074
	}
}

export default card
