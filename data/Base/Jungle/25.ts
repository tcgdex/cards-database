import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		it: "Pinsir",
		de: "Pinsir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Irongrip",
				fr: "Poing de fer",
				it: "Presa di Ferro",
				de: "Eiserner Griff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Guillotine",
				fr: "Guillotine",
				it: "Ghigliottina",
				de: "Guillotine"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "If it fails to crush the victim in its pincers, it will swing its victim around and toss it hard.",
		fr: "Quand il ne peut écraser sa proie avec sa pince, il la secoue et l'envoie dans les airs.",
		it: "Se non riesce a stritolare la vittima con le sue pinze, la sbatacchia e la scaglia violentemente al suolo.",
		de: "Falls es ihm nicht gelingt, sein Opfer in seinen Kneifzangen zu erdrücken, schwingt es sein Opfer durch die Luft und nimmt es auf die Hörner."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273806,
				tcgplayer: 106987
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273806,
				tcgplayer: 106987
			}
		}
	],
}

export default card
