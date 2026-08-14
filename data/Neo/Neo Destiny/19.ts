import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Omastar",
		fr: "Amonistar obscur",
		de: "Dunkles Amoroso"
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
		fr: "Amonita obscur",
		de: "Amonitas"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Prehistoric Water",
				fr: "Eau préhistorique",
				de: "Urzeitwasser"
			},
			effect: {
				en: "If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.",
				fr: "Si votre adversaire a des Pokémon évolués, choisissez l'un d'eux et lancez une pièce. Si c'est face, votre adversaire prend la carte Évolution de niveau le plus élevé de ce Pokémon et la mélange à son deck.",
				de: "Wenn dein Gegner mindestens ein entwickeltes Pokémon im Spiel hat, wähle eines von diesen und wirf eine Münze. Bei „Kopf“ nimmt dein Gegner die Entwicklungskarte der höchsten Phase von diesem Pokémon und mischt sie in sein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Dark Tentacle",
				fr: "Sombre tentacule",
				de: "Finsteres Tentakel"
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon can't evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)",
				fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas évoluer excepté par l'effet d'une attaque ou d'un Pouvoir Pokémon. (Envoyer ce Pokémon sur le Banc met fin à cet effet.)",
				de: "Während des nächsten Zuges deines Gegners kann sich das verteidigende Pokémon nicht entwickeln, außer durch Effekte von Angriffen und Pokémon-Powers. (Wenn das Pokémon auf die Bank kommt, endet dadurch dieser Effekt.)"
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
		en: "Nothing can escape once wrapped in its tentacles, which it uses for self-defense as well as to catch food.",
		fr: "Rien ne peut lui échapper une fois dans ses tentacules, qu'il utilise pour se défendre, mais aussi pour se nourrir.",
		de: "Nichts, was es einmal in seine Tentakel gewickelt hat kann entkommen - sowohl in der Selbstverteidigung als auch beim Fangen von Nahrung."
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
