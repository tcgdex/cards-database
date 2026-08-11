import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
		'es-es': "Cottonee",
		'it-it': "Cottonee",
		'pt-br': "Cottonee",
		'de-de': "Waumboll"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		546,
	],

	hp: 40,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lost March",
				'fr-fr': "Marche Perdue",
				'es-es': "Marcha Perdida",
				'it-it': "Marcia Perduta",
				'pt-br': "Marcha Perdida",
				'de-de': "Nirgendwo-Marsch"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon {*} (Prisme Étoile).",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en la Zona Perdida, excepto los Pokémon de {*} (Estrella Prisma).",
				'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon nell’area perduta, a eccezione dei Pokémon {*} (stella prisma).",
				'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon na Zona Perdida, exceto por seus Pokémon {*} (Estrela Prisma).",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon, außer {*}-Pokémon (Prisma-Stern-Pokémon), im Nirgendwo zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To protect itself, it shoots cotton from its body. When it gets wet in the rain, its cotton grows moist and heavy, and it can't move as well.",
	},

	thirdParty: {
		cardmarket: 408379,
		tcgplayer: 201191
	}
}

export default card
