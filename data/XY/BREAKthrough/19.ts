import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson",
		es: "Quilava",
		it: "Quilava",
		pt: "Quilava",
		de: "Igelavar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
		es: "Cyndaquil",
		it: "Cyndaquil",
		pt: "Cyndaquil",
		de: "Feurigel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Mini Eruption",
				fr: "Mini-Éruption",
				es: "Miniestallido",
				it: "Minieruzione",
				pt: "Mini Erupção",
				de: "Kleine Eruption"
			},
			effect: {
				en: "Discard the top card of your deck. If that card is an Energy card, this attack does 30 more damage.",
				fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Descarta la primera carta de tu baraja. Si es una carta de Energía, este ataque hace 30 puntos de daño más.",
				it: "Scarta la prima carta del tuo mazzo. Se è una carta Energia, questo attacco infligge 30 danni in più.",
				pt: "Descarte o card de cima do seu baralho. Se aquele card for um card de Energia, este ataque causará 30 de danos adicionais.",
				de: "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Falls es eine Energiekarte ist, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286265,
		tcgplayer: 107138
	}
}

export default card
