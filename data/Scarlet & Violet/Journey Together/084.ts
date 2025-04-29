import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		de: "Wuffels",
		it: "Rockruff",
		pt: "Rockruff",
		'es-mx': "Rockruff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dig It Up",
			fr: "Dénicher",
			es: "Socavar",
			de: "Buddeln",
			it: "Rinvenimento",
			pt: "Desaterrar",
			'es-mx': "Hallazgo Desenterrado"
		},

		effect: {
			en: "Look at the top card of your deck. You may discard that card.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			es: "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			it: "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta.",
			pt: "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			'es-mx': "Mira la primera carta de tu mazo. Puedes descartar esa carta."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			es: "Estampida",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			'es-mx': "Estampida"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
