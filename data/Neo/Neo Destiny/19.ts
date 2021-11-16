import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Omastar",
		fr: "Amonistar obscur"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		139,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Omanyte",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Prehistoric Water",
				fr: "Eau préhistorique"
			},
			effect: {
				en: "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.",
				fr: "Si votre adversaire a des Pokémon évolués, choisissez l'un d'eux et lancez une pièce. Si c'est face, votre adversaire prend la carte Évolution de niveau le plus élevé de ce Pokémon et la mélange à son deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Dark Tentacle",
				fr: "Sombre tentacule"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas évoluer excepté par l'effet d'une attaque ou d'un Pouvoir Pokémon. (Envoyer ce Pokémon sur le Banc met fin à cet effet.)"
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

	description: {
		fr: "Rien ne peut lui échapper une fois dans ses tentacules, qu'il utilise pour se défendre, mais aussi pour se nourrir."
	}
}

export default card
