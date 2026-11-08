import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Tynamo",
		'fr-fr': "Anchwatt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Overspark",
				'fr-fr': "Max’Étincelle",
				'es-es': "Exceso de Chispas",
				'it-it': "Strascintilla",
				'pt-br': "Faísca Excessiva",
				'de-de': "Hochspannungsfunke"
			},
			effect: {
				'en-us': "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta todas las Energías Lightning de este Pokémon. Este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte todas as Energias Lightning deste Pokémon. Este ataque causa 30 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It wraps itself around its prey and paralyzes it with electricity from the round spots on its sides. Then it chomps.",
	},

	thirdParty: {
		cardmarket: 388147,
		tcgplayer: 194991
	}
}

export default card
