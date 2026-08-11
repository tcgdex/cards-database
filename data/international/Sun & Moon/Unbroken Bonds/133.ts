import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
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
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Moon-Watching Dance",
				'fr-fr': "Danse au Clair de Lune",
				'es-es': "Danza Contemplación Lunar",
				'it-it': "Danza Lunare",
				'pt-br': "Dança do Luar",
				'de-de': "Mondschautanz"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each of your Pokémon that has any Fairy Energy attached to it.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon auquel de l’Énergie Fairy est attachée.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon que tenga alguna Energía Fairy unida a él.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni tuo Pokémon che abbia delle Energie Fairy assegnate.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada um dos seus Pokémon que tiver alguma Energia Fairy ligada a ele.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl deiner Pokémon zu, an die mindestens 1 Fairy-Energie angelegt ist."
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

	description: {
		'en-us': "It can't help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren't many people or Pokémon.",
	},

	thirdParty: {
		cardmarket: 372420,
		tcgplayer: 189231
	}
}

export default card
