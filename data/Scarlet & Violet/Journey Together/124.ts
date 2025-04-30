import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		de: "Ohrdoch",
		it: "Audino",
		pt: "Audino",
		'es-mx': "Audino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beckon",
			fr: "Invite",
			es: "Hacer Señas",
			de: "Herbeiwinken",
			it: "Appello",
			pt: "Aceno",
			'es-mx': "Invitar"
		},

		effect: {
			en: "Put a Supporter card from your discard pile into your hand.",
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
			de: "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand.",
			it: "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Apoiador da sua pilha de descarte na sua mão.",
			'es-mx': "Pon 1 carta de Partidario de tu pila de descartes en tu mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Zen Headbutt",
			fr: "Psykoud'Boul",
			es: "Cabezazo Zen",
			de: "Zen-Kopfstoß",
			it: "Cozzata Zen",
			pt: "Cabeçada Zen",
			'es-mx': "Cabezazo Zen"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
