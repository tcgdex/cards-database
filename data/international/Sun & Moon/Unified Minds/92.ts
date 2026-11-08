import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
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
				'fr-fr': "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Apparently this Pokémon is born when a departed spirit inhabits a sword. It attaches itself to people and drinks their life force.",
	},

	thirdParty: {
		cardmarket: 388262,
		tcgplayer: 195024
	}
}

export default card
