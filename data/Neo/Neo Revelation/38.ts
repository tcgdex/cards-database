import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		de: "Damhirplex"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Terrorize",
				fr: "Terreur",
				de: "Terrorisieren"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic, choose 1 of its attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, choisissez 1 de ses attaques. Ce Pokémon ne peut pas utiliser cette attaque durant le prochain tour de votre adversaire.",
				de: "Wenn das verteidigende Pokémon ein Basis-Pokémon ist, wähle einen seiner Angriffe. Dieses Pokémon kann diesen Angriff während des nächsten Zuges deines Gegners nicht verwenden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overhead Toss",
				fr: "Souléve'korne",
				de: "Überkopfwurf"
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous avez des Pokémon sur votre Banc, lancez une pièce. Si c'est pile, cette attaque inflige 10 dégâts à l'un d'entre eux. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				de: "Wenn du mindestens ein Pokémon auf deiner Bank hast, wirf eine Münze. Bei „Zahl“ fügt dieser Angriff einem dieser Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "Those who stare at its antlers will gradually lose control of their senses and be unable to stand.",
		fr: "Quiconque fixe ses bois perd peu à peu le contrôle de ses sens et finit par ne plus pouvoir tenir debout.",
		de: "Wer sich ihr Geweih zu genau anschaut, verliert die Kontrolle über seine Sinne und bekommt Probleme, gerade zu stehen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274624,
				tcgplayer: 89500
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274624,
				tcgplayer: 89500
			}
		}
	]
}

export default card

