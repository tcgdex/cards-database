import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Natu",
		fr: "Natu",
		es: "Natu",
		it: "Natu",
		pt: "Natu",
		de: "Natu"
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
				en: "Lost March",
				fr: "Marche Perdue",
				es: "Marcha Perdida",
				it: "Marcia Perduta",
				pt: "Marcha Perdida",
				de: "Nirgendwo-Marsch"
			},
			effect: {
				en: "This attack does 20 damage for each of your Pokémon, except {*} (Prism Star) Pokémon, in the Lost Zone.",
				fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon {*} (Prisme Étoile).",
				es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en la Zona Perdida, excepto los Pokémon de {*} (Estrella Prisma).",
				it: "Questo attacco infligge 20 danni per ogni tuo Pokémon nell’area perduta, a eccezione dei Pokémon {*} (stella prisma).",
				pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon na Zona Perdida, exceto por seus Pokémon {*} (Estrela Prisma).",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Pokémon, außer {*}-Pokémon (Prisma-Stern-Pokémon), im Nirgendwo zu."
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



}

export default card
