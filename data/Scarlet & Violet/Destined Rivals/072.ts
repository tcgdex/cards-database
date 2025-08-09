import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [179],
	set: Set,

	name: {
		en: "Team Rocket's Mareep",
		fr: "Wattouat de la Team Rocket",
		de: "Team Rockets Voltilamm",
		it: "Mareep del Team Rocket",
		es: "Mareep del Team Rocket",
		pt: "Mareep da Equipe Rocket",
		'es-mx': "Mareep del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Procurement",
			fr: "Acquisition",
			de: "Besorgung",
			it: "Rifornimento",
			es: "Adquisición",
			pt: "Suprimentos",
			'es-mx': "Adquisición"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Lightning"],

		name: {
			en: "Tiny Bolt",
			fr: "Foudre Minuscule",
			de: "Mini-Blitz",
			it: "Minifulmine",
			es: "Relampaguito",
			pt: "Corisquinho",
			'es-mx': "Minirrayo"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card