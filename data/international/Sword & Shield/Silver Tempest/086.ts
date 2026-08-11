import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [876],
	set: Set,

	name: {
		'en-us': "Indeedee",
		'fr-fr': "Wimessir",
		'es-es': "Indeedee",
		'it-it': "Indeedee",
		'pt-br': "Indeedee",
		'de-de': "Servol"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smart Service",
			'fr-fr': "Service Intelligent",
			'es-es': "Servicio Inteligente",
			'it-it': "Servizio Magistrale",
			'pt-br': "Serviço Inteligente",
			'de-de': "Pfiffiger Service"
		},

		effect: {
			'en-us': "If you go first, you can use this attack during your first turn. Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour. Cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Si sales primero, puedes usar este ataque durante tu primer turno. Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Se inizi per primo, puoi usare questo attacco durante il tuo primo turno. Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Se você for primeiro, poderá usar este ataque no seu primeiro turno. Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wenn du als Erster am Zug bist, kannst du diese Attacke während deines ersten Zuges einsetzen. Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Smack",
			'fr-fr': "Claque",
			'es-es': "Palmetazo",
			'it-it': "Schiaffo",
			'pt-br': "Estalo",
			'de-de': "Klatscher"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "F",


	description: {
		'en-us': "These intelligent Pokémon touch horns with each other to share information between them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682133,
				tcgplayer: 451740
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682133,
				tcgplayer: 451740
			}
		},
	],
}

export default card
