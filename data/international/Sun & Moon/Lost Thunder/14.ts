import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Jumpluff",
		'fr-fr': "Cotovol",
		'es-es': "Jumpluff",
		'it-it': "Jumpluff",
		'pt-br': "Jumpluff",
		'de-de': "Papungha"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		189,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiploom",
		'fr-fr': "Floravol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
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
				'en-us': "This attack does 20 damage for each of your Pokémon, except {*} (Prism Star) Pokémon, in the Lost Zone.",
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
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Even in the fiercest wind, it can control its fluff to make its way to any place in the world it wants.",
	},

	thirdParty: {
		cardmarket: 365607,
		tcgplayer: 178811
	}
}

export default card
