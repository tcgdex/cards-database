import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
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
				en: "Lucky Find",
				fr: "Trouvaille Inespérée",
				es: "Hallazgo Afortunado",
				it: "Ritrovamento Fortunato",
				pt: "Descoberta Sortuda",
				de: "Glücksfund"
			},
			effect: {
				en: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
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

	thirdParty: {
		cardmarket: 388262
	}
}

export default card
