import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		de: "Bluzuk",
		it: "Venonat"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		48,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-spore",
				de: "Stachelspore",
				it: "Spore paralizzanti"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
				de: "Blutsauger",
				it: "Sanguisuga"
			},
			effect: {
				en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
				fr: "Retirez de Mimitoss un nombre de marqueurs de dégâts égal aux dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Mimitoss a moins de marqueurs de 10 dégâts, retirez-les tous.",
				de: "Entferne von Bluzuk Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon durch diesen Angriff zugefügt wurden (nachdem Schwäche und Reistenz abgerechnet wurden). Falls Bluzuk weniger Schadensmarken als diese Anzahl hat, entferne sie alle.",
				it: "Togli da Venonat un numero di segnalini danno pari ai danni inflitti al Pokémon Difensore (dopo avere applicato Debolezza e Resistenza). Se Venonat ha meno segnalini danno di quelli che gli verrebbero tolti, toglili tutti."
			},
			damage: 10,

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
		en: "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
		fr: "Il vit à l'ombre des grands arbres où il mange des insectes. Il est attiré par la lumière.",
		it: "Vive all'ombra di grandi alberi, dove si nutre di insetti. Di notte è attirato dalla luce artificiale."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273860,
				tcgplayer: 45166
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273860,
				tcgplayer: 45166
			}
		}
	],
}

export default card
