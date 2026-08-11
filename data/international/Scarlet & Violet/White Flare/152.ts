import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [504],
	set: Set,

	name: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
		'de-de': "Nagelotz",
		'it-it': "Patrat",
		'pt-br': "Patrat",
		'es-es': "Patrat",
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
			'en-us': "Procurement",
			'fr-fr': "Acquisition",
			'de-de': "Besorgung",
			'it-it': "Rifornimento",
			'pt-br': "Suprimentos",
			'es-es': "Adquisición",
			'es-mx': "Adquisición"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo 1 carta de Objeto, muéstrala y ponla en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'es-es': "Roer",
			'es-mx': "Mordisquear"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 836186,
			tcgplayer: 642266
		}
	},
],
}

export default card
