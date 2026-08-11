import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [347],
	set: Set,

	name: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'es-es': "Anorith",
		'it-it': "Anorith",
		'pt-br': "Anorith",
		'de-de': "Anorith"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
		'es-es': "Fósil Desconocido",
		'it-it': "Fossile Sconosciuto",
		'pt-br': "Fóssil Não Identificado",
		'de-de': "Unbekanntes Fossil"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Fossil Drop",
			'fr-fr': "Chute Fossile",
			'es-es': "Caída de Fósil",
			'it-it': "Caduta Fossili",
			'pt-br': "Queda de Fóssil",
			'de-de': "Fossilabwurf"
		},

		effect: {
			'en-us': "You may discard an Unidentified Fossil card from your hand. If you do, this attack does 120 more damage.",
			'fr-fr': "Vous pouvez défausser une carte Fossile Inconnu de votre main. Dans ce cas, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Puedes descartar 1 carta de Fósil Desconocido de tu mano. Si lo haces, este ataque hace 120 puntos de daño más.",
			'it-it': "Puoi scartare una carta Fossile Sconosciuto che hai in mano. Se lo fai, questo attacco infligge 120 danni in più.",
			'pt-br': "Você pode descartar 1 carta Fóssil Não Identificado da sua mão. Se fizer isto, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Du kannst 1 Unbekanntes Fossil-Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon was restored from a fossil. Anorith lived in the ocean about 100,000,000 years ago, hunting with its pair of claws.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682142,
				tcgplayer: 451749
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682142,
				tcgplayer: 451749
			}
		},
	],
}

export default card
