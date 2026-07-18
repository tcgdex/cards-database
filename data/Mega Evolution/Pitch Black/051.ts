import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Inkay",
		fr: "Sepiatop",
		es: "Inkay",
		'es-mx': "Inkay",
		de: "Iscalar",
		it: "Inkay",
		pt: "Inkay"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	dexId: [686],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Procurement",
			fr: "Acquisition",
			es: "Adquisición",
			'es-mx': "Adquisición",
			de: "Besorgung",
			it: "Rifornimento",
			pt: "Suprimentos"
		},

		cost: ["Darkness"],

		effect: {
			en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Spinning Attack",
			fr: "Attaque Tournante",
			es: "Ataque Giratorio",
			'es-mx': "Ataque Giratorio",
			de: "Rundumangriff",
			it: "Attacco Rotante",
			pt: "Ataque Giratório"
		},

		cost: ["Darkness", "Darkness"],

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895836,
				tcgplayer: 704808
			}
		},
	],
}

export default card
