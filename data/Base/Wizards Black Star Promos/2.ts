import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Electabuzz",
		de: "Elektek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 60,

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
				en: "Light Screen",
				fr: "Écran de lumière",
				de: "Lichtschirm"
			},
			effect: {
				en: "Whenever an attack does damage to Electabuzz (after applying Weakness and Resistance) during your opponent's next turn, that attack only does half the damage to Electabuzz (rounded down to the nearest 10). (Any other effects still happen.)",
				fr: "Dès qu'une attaque provoque des dégâts à Electabuzz (après application de la faiblesse et de la résistance), pendant le prochain tour de votre adversaire, cette attaque ne produit que la moitié des dégâts à Electabuzz (arrondis à la dizaine la plus proche). (Tout autre effet ou attaque est toujours valide.)",
				de: "Immer dann, wenn Elektek Schaden zugefügt wird, während Dein Mitspieler am Zug ist, (nach Anwendung von Schwäche und Widerstand), richtet dieser Angriff bei Elektek nur den halben Schaden an (auf die nächste 10 abrunden). (Andere Auswirkungen von Angriffen treten weiter ein.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Attaque rapide",
				de: "Schnellangriff"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei Kopf erhältst Du 10 Schadenspunkte plus 20 weitere; bei Zahl verursacht der Angriff 10 Schadenspunkte."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "A wild Pokémon with a short temper. It is able to distinguish colors, and likes the color red.",
		fr: "Un Pokémon sauvage au mauvais caractère. Capable de reconnaître les couleurs et apprécie la couleur rouge.",
		de: "Ein wildes, hitzköpfiges Pokémon. Es kann Farben unterscheiden und ihm gefällt die Farbe Rot."
	},

	variants: [
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"],
			thirdParty: {
				tcgplayer: 85107
			},
		}
	]
}

export default card
