import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
		it: "Venonat",
		de: "Bluzuk"
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
				it: "Spore paralizzanti",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
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
				it: "Sanguisuga",
				de: "Blutsauger"
			},
			effect: {
				en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
				fr: "Retirez de Mimitoss un nombre de marqueurs de dégâts égal aux dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance). Si Mimitoss a moins de marqueurs de 10 dégâts, retirez-les tous.",
				it: "Togli da Venonat un numero di segnalini danno pari ai danni inflitti al Pokémon Difensore (dopo avere applicato Debolezza e Resistenza). Se Venonat ha meno segnalini danno di quelli che gli verrebbero tolti, toglili tutti.",
				de: "Entferne von Bluzuk Schadensmarken in Höhe des Schadens, der dem verteidigenden Pokémon durch diesen Angriff zugefügt wurden (nachdem Schwäche und Resistenz abgerechnet wurden). Falls Bluzuk weniger Schadensmarken als diese Anzahl hat, entferne sie alle."
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
		it: "Vive all'ombra di grandi alberi, dove si nutre di insetti. Di notte è attirato dalla luce artificiale.",
		de: "Lebt im Schatten hoher Bäume, wo es Insekten frißt. Es wird nachts von Licht angezogen."
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
