import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [22],
	set: Set,

	name: {
		'fr-fr': "Rapasdepic",
		'en-us': "Fearow",
		'es-es': "Fearow",
		'it-it': "Fearow",
		'pt-br': "Fearow",
		'de-de': "Ibitak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Piafabec",
		'en-us': "Spearow",
		'es-es': "Spearow",
		'it-it': "Spearow",
		'pt-br': "Spearow",
		'de-de': "Habitak"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Bec Gobeur",
			'en-us': "Beak Catch",
			'es-es': "Captura Pico",
			'it-it': "Catturbecco",
			'pt-br': "Captura de Bico",
			'de-de': "Schnabelfang"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Plongée Rapide",
			'en-us': "Speed Dive",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 50
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
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "Carrying food through Fearow's territory is dangerous. It will snatch the food away from you in a flash!",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733617,
				tcgplayer: 502589,
				cardtrader: 261177
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733617,
				tcgplayer: 502589,
				cardtrader: 261177
			}
		},
	],

	illustrator: "Gemi",

	
}

export default card
