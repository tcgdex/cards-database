import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Zubat",
		fr: "Nosferapti",
		it: "Zubat",
		de: "Zubat"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		41,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Supersonic",
				fr: "Ultrason",
				it: "Supersonico",
				de: "Superschall"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				it: "Sanguisuga",
				de: "Blutsauger"
			},
			effect: {
				en: "Remove a number of damage counters from Zubat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Zubat has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Nosferapti un nombre de marqueurs de dégâts égal au nombre de dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance.) Si le nombre de marqueurs sur Nosferapti est inférieur à ce résultat, retirez-les tous.",
				it: "Togli a Zubat un numero di segnalini danno pari al danno inflitto al Pokémon Difensore (dopo aver applicato Debolezza e Resistenza). Se Zubat ha meno segnalini danno di quelli che gli verrebbero tolti, toglili tutti.",
				de: "Entferne von Zubat Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon zugefügt wurde (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Zubat weniger weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
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
		en: "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
		fr: "Se déplace en colonies dans les endroits sombres. Il se déplace grâce aux ultrasons.",
		it: "Forma delle colonie in luoghi dove non arriva mai la luce. Quando caccia usa gli ultrasuoni per identificare e catturare le prede.",
		de: "Bildet Kolonien an ewig dunklen Orten. Verwendet Ultraschall zum Identifizieren und Orten von Zielen."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273918,
				tcgplayer: 44459
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273918,
				tcgplayer: 44459
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273918,
				tcgplayer: 44459
			}
		},
	],
}

export default card
