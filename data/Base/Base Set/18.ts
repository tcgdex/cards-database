import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
		de: "Dragonir",
		it: "Dragonair"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Dratini",
		it: "Dratini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
				de: "Slam",
				it: "Schianto"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt jedesmal, wenn die Münze Kopf zeigt, 30 Schadenspunkte zu.",
				it: "Lancia 2 volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa."
			},
			damage: "30x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyperstrahl",
				it: "Iper-raggio"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, choisissez 1 d'elle et défaussez-la.",
				de: "Sind auf dem verteidigenden Ppkemon Energiekarten abgelegt, wähle eine von ihnen und entferne sie.",
				it: "Se il Pokémon Difensore ha delle carte Energie assegnate, scegline una e scartala."
			},
			damage: 20,

		},
	],

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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon légendaire plein de charme. Il peut contrôler les variations climatiques.",
		it: "Pokémon mistico con un'indole gentile. Ha l'abilità di cambiare le condizioni climatiche. LIV 33 N.148"
	},

	thirdParty: {
		cardmarket: 273713,
		tcgplayer: 42358
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/069.ts"
		}
	]
}

export default card
