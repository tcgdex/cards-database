import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Delcatty",
		'fr-fr': "Delcatty",
		'es-es': "Delcatty",
		'it-it': "Delcatty",
		'pt-br': "Delcatty",
		'de-de': "Enekoro"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		301,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Replace",
				'fr-fr': "Repositionnement",
				'es-es': "Traslado",
				'it-it': "Sostituzione",
				'pt-br': "Reorganizar",
				'de-de': "Austausch"
			},
			effect: {
				'en-us': "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
				'es-es': "Mueve tantas Energías unidas a tus Pokémon a tus otros Pokémon de la manera que desees.",
				'it-it': "Distribuisci a piacimento tutte le Energie assegnate ai tuoi Pokémon.",
				'pt-br': "Mova tantas Energias ligadas aos seus Pokémon quanto desejar para seus outros Pokémon.",
				'de-de': "Verschiebe beliebig viele an deine Pokémon angelegten Energien nach Belieben auf deine anderen Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is highly popular among female Trainers for its sublime fur. It does not keep a nest.",
	},

	thirdParty: {
		cardmarket: 273645,
		tcgplayer: 96012
	}
}

export default card
