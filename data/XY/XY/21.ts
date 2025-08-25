import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		es: "Magcargo",
		it: "Magcargo",
		pt: "Magcargo",
		de: "Magcargo"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		es: "Slugma",
		it: "Slugma",
		pt: "Slugma",
		de: "Schneckmag"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Mantle",
				fr: "Manteau de Magma",
				es: "Manto Magma",
				it: "Magmamanto",
				pt: "Manto de Magma",
				de: "Magmahülle"
			},
			effect: {
				en: "You may discard the top card of your deck. If that card is a Fire Energy card, this attack does 50 more damage.",
				fr: "Vous pouvez défausser la carte du dessus de votre deck. Si cette carte est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Puedes descartar la primera carta de tu baraja. Si es una carta de Energía Fire, este ataque hace 50 puntos de daño más.",
				it: "Puoi scartare la carta in cima al tuo mazzo. Se è una carta Energia Fire, questo attacco infligge 50 danni in più.",
				pt: "Você pode descartar o card do topo do seu baralho. Se esse card for um card de Energia Fire, esse ataque causará 50 de danos adicionais.",
				de: "Du kannst die oberste Karte deines Decks auf deinen Ablagestapel legen. Falls es eine Fire-Energiekarte ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281358,
		tcgplayer: 87018
	}
}

export default card
