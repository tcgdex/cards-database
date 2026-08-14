import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Donphan.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Donphan.",
				de: "Fügt 10 Schadenspunkte mal der Anzahl der Schadensmarken auf Donphan zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
				de: "Turbodreher"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Actif, ensuite, si vous avez des Pokémon sur votre Banc, vous choisissez l'un d'eux et l'échangez avec votre Pokémon Actif. (Infligez les dégâts avant d'échanger les Pokémon.)",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit seinem aktiven Pokémon aus. Falls du mindestens ein Pokémon auf der Bank hast, tauscht du dann eines von diesen mit deinem aktiven Pokémon aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
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

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		en: "It has sharp, hard tusks and a rugged hide. Its tackle is strong enough to knock down a house.",
		fr: "Il possède des défenses aiguisées et une peau épaisse. Ses charges sont suffisamment puissantes pour abattre une maison.",
		de: "Es hat scharfe, harte Hauer und eine robuste Haut. Mit seinem Angriff kann es sogar ein Haus niederreißen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274421,
				tcgplayer: 84872
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274421,
				tcgplayer: 84872
			}
		}
	]
}

export default card
