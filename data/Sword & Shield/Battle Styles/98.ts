import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Gather Food",
			fr: "Approvisionnement",
			es: "Avituallamiento",
			it: "Raccolta di Cibo",
			pt: "Catar Comida",
			de: "Futter sammeln"
		},

		effect: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			it: "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			pt: "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Hangry Tackle",
			fr: "Charge Affamée",
			es: "Placaje Voraz",
			it: "Azione Panciavuota",
			pt: "Colisão Voraz",
			de: "Kohldampf-Tackle"
		},

		effect: {
			en: "If you have no cards in your hand, this attack does 90 more damage.",
			fr: "Si vous n'avez aucune carte dans votre main, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si no tienes ninguna carta en tu mano, este ataque hace 90 puntos de daño más.",
			it: "Se non hai carte in mano, questo attacco infligge 90 danni in più.",
			pt: "Se você não tiver cartas na sua mão, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds."
	}
}

export default card
