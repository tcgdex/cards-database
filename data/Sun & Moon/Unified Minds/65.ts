import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
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
		en: "Tynamo",
		fr: "Anchwatt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Overspark",
				fr: "Max’Étincelle",
				es: "Exceso de Chispas",
				it: "Strascintilla",
				pt: "Faísca Excessiva",
				de: "Hochspannungsfunke"
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon. This attack does 30 damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 30 dégâts pour chaque carte défaussée de cette façon.",
				es: "Descarta todas las Energías Lightning de este Pokémon. Este ataque hace 30 puntos de daño por cada carta que hayas descartado de esta manera.",
				it: "Scarta tutte le Energie Lightning assegnate a questo Pokémon. Questo attacco infligge 30 danni per ogni carta che hai scartato in questo modo.",
				pt: "Descarte todas as Energias Lightning deste Pokémon. Este ataque causa 30 pontos de dano para cada carta descartada desta forma.",
				de: "Lege alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
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

	thirdParty: {
		cardmarket: 388147,
		tcgplayer: 194991
	}
}

export default card
