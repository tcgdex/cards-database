import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Silicobra",
		fr: "Dunaja de Nabil",
		es: "Silicobra de Paul",
		de: "Hops Salanga",
		it: "Silicobra di Hop",
		pt: "Silicobra do Lupo",
		'es-mx': "Silicobra de Paul"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Turf Maker",
			fr: "Faiseur de Terrains",
			es: "Espíritu Territorial",
			de: "Reviermacher",
			it: "Terrenoformazione",
			pt: "Demarcar Território",
			'es-mx': "Demarcador Territorial"
		},

		effect: {
			en: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Stade, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Estadio, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			de: "Durchsuche dein Deck nach 1 Stadionkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Stadio, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por uma carta de Estádio no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo 1 carta de Estadio, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			de: "Nagen",
			it: "Rosicchiamento",
			pt: "Roída",
			'es-mx': "Mordisquear"
		},

		damage: 20
	}],

	retreat: 2,
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
