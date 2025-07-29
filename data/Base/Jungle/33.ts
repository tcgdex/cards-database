import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		de: "Smettbo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a au moins 1 Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Défenseur. (Infligez les dégâts avant de faire l'échange des Pokémon.)",
				de: "Falls dein gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit dem verteidigenden Pokémonaus. (Füge die Schadenspunkte vor dem Auswechseln des Pokémon zu.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Mega Drain",
				fr: "Mega-sangsue",
				de: "Megasauger"
			},
			effect: {
				en: "Remove a number of damage counters from Butterfree equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10).",
				fr: "Retirez de Papilusion un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondir à la dizaine la plus proche). Si Papilusion a moins de marqueurs de 10 dégâts, retirez-les tous.",
				de: "Entferne von Smettbo Schadensmarken in Höhe der Hälfte des Schadens (auf die nächsten 10 aufgerundet), der dem verteidigenden Pokémon durch diesen Angriff zugefügt wurden (nachdem Schwäche und Resistenz abgerechnet wurden)."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "En combat, il bat des ailes très rapidement pour projeter des poudres toxiques sur ses ennemis."
	},

	thirdParty: {
		cardmarket: 273830
	}
}

export default card
