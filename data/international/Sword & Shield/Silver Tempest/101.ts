import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [874],
	set: Set,

	name: {
		'en-us': "Stonjourner",
		'fr-fr': "Dolman",
		'es-es': "Stonjourner",
		'it-it': "Stonjourner",
		'pt-br': "Stonjourner",
		'de-de': "Humanolith"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Mystery Press",
			'fr-fr': "Pression Mystère",
			'es-es': "Presión Misteriosa",
			'it-it': "Pressa Mistero",
			'pt-br': "Compressão Misteriosa",
			'de-de': "Geheimnisvoller Druck"
		},

		effect: {
			'en-us': "If you have no Supporter cards in your discard pile, this attack does 130 more damage.",
			'fr-fr': "Si vous n'avez aucune carte Supporter dans votre pile de défausse, cette attaque inflige 130 dégâts supplémentaires.",
			'es-es': "Si no tienes ninguna carta de Partidario en tu pila de descartes, este ataque hace 130 puntos de daño más.",
			'it-it': "Se non hai carte Aiuto nella tua pila degli scarti, questo attacco infligge 130 danni in più.",
			'pt-br': "Se você não tiver cartas de Apoiador na sua pilha de descarte, este ataque causará 130 pontos de dano a mais.",
			'de-de': "Wenn du keine Unterstützerkarten in deinem Ablagestapel hast, fügt diese Attacke 130 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It stands in grasslands, watching the sun's descent from zenith to horizon. This Pokémon has a talent for delivering dynamic kicks.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682148,
				tcgplayer: 451755
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682148,
				tcgplayer: 451755
			}
		},
	],
}

export default card
