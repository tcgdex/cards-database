import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Sandslash δ",
		fr: "Sablaireau δ ESPÈCES DELTA"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 80,
	types: [
		"Fighting",
		"Metal",
	],
	evolveFrom: {
		en: "Sandshrew",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Delta Storm",
				fr: "Tempête Delta"
			},
			effect: {
				en: "As long as Sandslash is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon-ex between turns.",
				fr: "Tant que Sablaireau est votre Pokémon Actif, placez 1 marqueur de dégât sur chacun des Pokémon-ex de votre adversaire entre deux tours."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rend",
				fr: "Déchirer"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
