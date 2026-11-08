import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Dark Omastar",
		'fr-fr': "Amonistar obscur",
		'de-de': "Dunkles Amoroso"
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
		'en-us': "Omanyte",
		'fr-fr': "Amonita obscur"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Prehistoric Water",
				'fr-fr': "Eau préhistorique",
				'de-de': "Prehistoric Water"
			},
			effect: {
				'en-us': "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.",
				'fr-fr': "Si votre adversaire a des Pokémon évolués, choisissez l'un d'eux et lancez une pièce. Si c'est face, votre adversaire prend la carte Évolution de niveau le plus élevé de ce Pokémon et la mélange à son deck.",
				'de-de': "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dark Tentacle",
				'fr-fr': "Sombre tentacule",
				'de-de': "Dark Tentacle"
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas évoluer excepté par l'effet d'une attaque ou d'un Pouvoir Pokémon. (Envoyer ce Pokémon sur le Banc met fin à cet effet.)",
				'de-de': "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)"
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


	description: {
		'en-us': "Nothing can escape once wrapped in its tentacles, which it uses for self-defense as well as to catch food.",
		'fr-fr': "Rien ne peut lui échapper une fois dans ses tentacules, qu'il utilise pour se défendre, mais aussi pour se nourrir."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274671,
				tcgplayer: 84635
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274671,
				tcgplayer: 84635
			}
		}
	]
}

export default card
