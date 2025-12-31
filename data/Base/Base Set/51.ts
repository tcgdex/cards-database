import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Koffing",
		fr: "Smogo",
		de: "Smogon",
		it: "Koffing"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		109,
	],

	hp: 50,

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
				en: "Foul Gas",
				fr: "Gaz infect",
				de: "Fäulnisgas",
				it: "Gas puzzolente"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné ; si c'est pile, il est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet; bei 'Zahl' verwirrt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato; se esce croce, è Confuso."
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

	description: {
		fr: "Son corps, constitué de gaz toxiques et instables, peut exploser soudainement.",
		it: "Il suo corpo contiene vari tipi di gas tossici ed è per questo che spesso esplode senza alcun preavviso. LIV 13 N.109",
	},

	thirdParty: {
		cardmarket: 273746,
		tcgplayer: 42395
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
