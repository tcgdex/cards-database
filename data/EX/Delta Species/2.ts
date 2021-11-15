import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Crobat δ",
		fr: "Nostenfer δ ESPÈCES DELTA"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 90,
	types: [
		"Grass",
		"Metal",
	],
	evolveFrom: {
		en: "Golbat",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Radar Jam",
				fr: "Transmission brouillée"
			},
			effect: {
				en: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur (cartes Supporter exceptées) de sa main lors du prochain tour de votre adversaire."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Target Attack",
				fr: "Attaque ciblée"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. If that Pokémon already has damage counters on it, this attack does 60 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Si ce Pokémon possède déjà des marqeurs de dégât, cette attaque inflige 60 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
