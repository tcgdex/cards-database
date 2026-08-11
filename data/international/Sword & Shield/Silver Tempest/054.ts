import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [587],
	set: Set,

	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lucky Find",
			'fr-fr': "Trouvaille Inespérée",
			'es-es': "Hallazgo Afortunado",
			'it-it': "Ritrovamento Fortunato",
			'pt-br': "Descoberta Sortuda",
			'de-de': "Glücksfund"
		},

		effect: {
			'en-us': "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Objet, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática",
			'de-de': "Statischer Schock"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "As Emolga flutters through the air, it crackles with electricity. This Pokémon is cute, but it can cause a lot of trouble.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682101,
				tcgplayer: 451710
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682101,
				tcgplayer: 451710
			}
		},
	],
}

export default card
