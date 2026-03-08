import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [504],
	set: Set,

	name: {
		en: "Patrat",
		fr: "Ratentif",
		de: "Nagelotz",
		it: "Patrat",
		pt: "Patrat",
		es: "Patrat",
		'es-mx': "Patrat"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Procurement",
			fr: "Acquisition",
			de: "Besorgung",
			it: "Rifornimento",
			pt: "Suprimentos",
			es: "Adquisición",
			'es-mx': "Adquisición"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída",
			es: "Roer",
			'es-mx': "Mordisquear"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836186
	}
}

export default card