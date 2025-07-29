import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar"
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
		en: "Haunter",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Curse",
				fr: "Malédiction"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer 1 marqueur de dégâts depuis 1 des Pokémon de votre adversaire vers un autre (même si cela met l'autre Pokémon K.O.). Ce pouvoir ne peut être utilisé si Ectoplasma est Endormi, Confus ou Paralysé."
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
				en: "Dark Mind",
				fr: "Sombre-esprit",
				de: "Finsteres Gemüt"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si votre adversaire a des Pokémon sur son Banc, choisissez l'un d'eux et cette attaque lui inflige 10 dégâts. (Ne pas appliquer la Résistance et la Faiblesse au Pokémon du Banc.)",
				de: "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wähle eines von ihnen. Dieser Angriff fügt ihm 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden.)"
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

	description: {
		fr: "Les nuits de pleine lune, il imite l'ombre des passants et se moque de leur effroi."
	},

	thirdParty: {
		cardmarket: 273866
	}
}

export default card
