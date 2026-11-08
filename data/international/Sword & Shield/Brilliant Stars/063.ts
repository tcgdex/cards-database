import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [358],
	set: Set,

	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'es-es': "Chimecho",
		'it-it': "Chimecho",
		'pt-br': "Chimecho",
		'de-de': "Palimpalim"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Clear Tone",
			'fr-fr': "Tonalité Libre",
			'es-es': "Tono Claro",
			'it-it': "Tono Chiaro",
			'pt-br': "Tom Inconfundível",
			'de-de': "Klarer Ton"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Special Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie spéciale, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Especial, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia speciale, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Especial no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Spezial-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hang Down",
			'fr-fr': "Suspension",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 30
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
		'en-us': "Emitting ultrasonic cries, it floats on winds to travel great distances.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608513,
				tcgplayer: 263779
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608513,
				tcgplayer: 263779
			}
		},
	],
}

export default card
