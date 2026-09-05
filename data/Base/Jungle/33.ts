import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		it: "Butterfree",
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
		fr: "Chrysacier",
		it: "Metapod",
		de: "Safcon"
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
				it: "Turbine",
				de: "Wirbelwind"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
				fr: "Si votre adversaire a au moins 1 Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Défenseur. (Infligez les dégâts avant de faire l'échange des Pokémon.)",
				it: "Se il tuo avversario ha dei Pokémon in Panchina deve sceglierne uno e scambiarlo con il Pokémon Difensore (infliggi il danno prima di sostituire il Pokémon).",
				de: "Falls dein Gegner irgendwelche Pokémon auf der Bank hat, wählt er eines von ihnen und tauscht es mit dem verteidigenden Pokémon aus. (Füge die Schadenspunkte vor dem Auswechseln des Pokémon zu.)"
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
				it: "Megassorbimento",
				de: "Megasauger"
			},
			effect: {
				en: "Remove a number of damage counters from Butterfree equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10).",
				fr: "Retirez de Papilusion un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondir à la dizaine la plus proche). Si Papilusion a moins de marqueurs de 10 dégâts, retirez-les tous.",
				it: "Togli a Butterfree un numero di segnalini danno pari alla metà (arrotondata per eccesso alla decina più vicina) del danno inflitto al Pokémon Difensore (dopo avere applicato Debolezza e Resistenza). Se Butterfree ha meno segnalini danno di quelli che gli verrebbero tolti, toglili tutti.",
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
		en: "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
		fr: "En combat, il bat des ailes très rapidement pour projeter des poudres toxiques sur ses ennemis.",
		it: "In battaglia sbatte rapidamente le ali, spargendo nell'aria una polvere altamente velenosa.",
		de: "In der Schlacht schlägt es seine Flügel mit hoher Geschwindigkeit, um so hochgiftigen Staub in die Luft zu wirbeln."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273830,
				tcgplayer: 45136
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273830,
				tcgplayer: 45136
			}
		},
		{
			type: "normal",
			stamp: ["d-edition-error"]
		},
	],
}

export default card
