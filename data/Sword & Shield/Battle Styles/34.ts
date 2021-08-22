import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar",
		es: "Mr. Mime de Galar",
		it: "Mr. Mime di Galar",
		pt: "Mr. Mime de Galar",
		de: "Galar-Pantimos"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras’Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			en: "Find It",
			fr: "Trifouiller",
			es: "Busca",
			it: "Cercatrova",
			pt: "Encontrar",
			de: "Aufspüren"
		},

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
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
		en: "It can radiate chilliness from the bottoms of its feet. It’ll spend the whole day tap-dancing on a frozen floor."
	}
}

export default card