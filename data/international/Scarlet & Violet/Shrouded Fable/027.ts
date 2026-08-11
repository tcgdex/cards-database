import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Lead",
			'fr-fr': "Mentor",
			'es-es': "Liderazgo",
			'it-it': "Guidare",
			'pt-br': "Liderar",
			'de-de': "Führen"
		},

		effect: {
			'en-us': "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck une carte Supporter, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta de Partidario, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Aiuto, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por uma carta de Apoiador no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "osare",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780922,
				tcgplayer: 560337
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780922,
				tcgplayer: 560337
			}
		},
	],
}

export default card
