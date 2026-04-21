import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Drowzee",
		fr: "Soporifik",
		de: "Traumato",
		it: "Drowzee"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras' Face",
				de: "Pfund",
				it: "Libbra"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
				de: "Konfustrahl",
				it: "Stordiraggio"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon verwirrt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Confuso.",
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
		fr: "Il endort ses ennemis et dévore leurs songes. En mangeant de mauvais rêves, il devient malade.",
		it: "Addormenta i suoi nemici e poi mangia i loro sogni. A volte si sente male dopo aver mangiato dei brutti sogni. LIV 12 N.96",
	},

	thirdParty: {
		cardmarket: 273744,
		tcgplayer: 42392
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

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/045.ts"
		}
	]
}

export default card
