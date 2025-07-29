import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
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
				en: "Eleventh Hour Tackle",
				fr: "Tacle Désespéré",
				es: "Placaje de Última Hora",
				it: "Azione in Extremis",
				pt: "Investida de Última Hora",
				de: "Notstampfer"
			},
			effect: {
				en: "If there are 3 or fewer cards in your deck, this attack does 130 more damage.",
				fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 130 dégâts supplémentaires.",
				es: "Si hay 3 o menos cartas en tu baraja, este ataque hace 130 puntos de daño más.",
				it: "Se ci sono tre o meno carte nel tuo mazzo, questo attacco infligge 130 danni in più.",
				pt: "Se houver 3 ou menos cartas no seu baralho, este ataque causará 130 pontos de dano a mais.",
				de: "Wenn 3 oder weniger Karten in deinem Deck sind, fügt diese Attacke 130 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 315996
	}
}

export default card
