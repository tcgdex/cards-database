import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Curse",
				'fr-fr': "Malédiction"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 des Pokémon de votre adversaire vers un autre (même si cela met l'autre Pokémon K.O.). Ce pouvoir ne peut être utilisé si Ectoplasma est Endormi, Confus ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dark Mind",
				'fr-fr': "Sombre-esprit",
				'de-de': "Finsteres Gemüt"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				'de-de': "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",
		'fr-fr': "Les nuits de pleine lune, il imite l'ombre des passants et se moque de leur effroi."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273866,
				tcgplayer: 44428
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273866,
				tcgplayer: 44428
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
