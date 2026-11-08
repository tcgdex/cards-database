import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'es-es': "Hippopotas",
		'it-it': "Hippopotas",
		'pt-br': "Hippopotas",
		'de-de': "Hippopotas"
	},

	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		449,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Eleventh Hour Tackle",
				'fr-fr': "Tacle Désespéré",
				'es-es': "Placaje de Última Hora",
				'it-it': "Azione in Extremis",
				'pt-br': "Investida de Última Hora",
				'de-de': "Notstampfer"
			},
			effect: {
				'en-us': "If there are 3 or fewer cards in your deck, this attack does 130 more damage.",
				'fr-fr': "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 130 dégâts supplémentaires.",
				'es-es': "Si hay 3 o menos cartas en tu baraja, este ataque hace 130 puntos de daño más.",
				'it-it': "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 130 danni in più.",
				'pt-br': "Se houver 3 ou menos cartas no seu baralho, este ataque causará 130 pontos de dano a mais.",
				'de-de': "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 130 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
	},

	thirdParty: {
		cardmarket: 315996,
		tcgplayer: 157685
	}
}

export default card
