import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 40,

	types: [
		"Psychic",
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
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots.",
	},

	thirdParty: {
		cardmarket: 365724,
		tcgplayer: 178898
	}
}

export default card
