import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [30],
	set: Set,

	name: {
		'fr-fr': "Nidorina",
		'en-us': "Nidorina",
		'es-es': "Nidorina",
		'it-it': "Nidorina",
		'pt-br': "Nidorina",
		'de-de': "Nidorina"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Nidoran♀",
		'en-us': "Nidoran♀",
		'es-es': "Nidoran♀",
		'it-it': "Nidoran♀",
		'pt-br': "Nidoran♀",
		'de-de': "Nidoran♀"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Rassemblement Familial",
			'en-us': "Fetch Family",
			'es-es': "Buscar a la Familia",
			'it-it': "Radunafamiglia",
			'pt-br': "Buscar a Família",
			'de-de': "Familientreffen"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Croc Aiguisé",
			'en-us': "Sharp Fang",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "If the group is threatened, these Pokémon will band together to assault enemies with a chorus of ultrasonic waves.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733625,
				tcgplayer: 516000,
				cardtrader: 261198
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733625,
				tcgplayer: 516000,
				cardtrader: 261198
			}
		},
	],

	illustrator: "Teeziro",

	
}

export default card
