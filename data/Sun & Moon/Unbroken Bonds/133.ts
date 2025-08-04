import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Moon-Watching Dance",
				fr: "Danse au Clair de Lune",
				es: "Danza Contemplación Lunar",
				it: "Danza Lunare",
				pt: "Dança do Luar",
				de: "Mondschautanz"
			},
			effect: {
				en: "This attack does 30 more damage for each of your Pokémon that has any Fairy Energy attached to it.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon auquel de l’Énergie Fairy est attachée.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon que tenga alguna Energía Fairy unida a él.",
				it: "Questo attacco infligge 30 danni in più per ogni tuo Pokémon che abbia delle Energie Fairy assegnate.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada um dos seus Pokémon que tiver alguma Energia Fairy ligada a ele.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl deiner Pokémon zu, an die mindestens 1 Fairy-Energie angelegt ist."
			},
			damage: "10+",

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

	thirdParty: {
		cardmarket: 372420,
		tcgplayer: 189231
	}
}

export default card
