import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [703],
	set: Set,

	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	illustrator: "Tika Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
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
			'en-us': "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Objet, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Objeto, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Strumento, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Item no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Itemkarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674121,
				tcgplayer: 284003
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674121,
				tcgplayer: 284003
			}
		},
	],
}

export default card
