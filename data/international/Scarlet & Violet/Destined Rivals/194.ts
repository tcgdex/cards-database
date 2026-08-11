import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'en-us': "Misty's Lapras",
		'fr-fr': "Lokhlass d'Ondine",
		'de-de': "Mistys Lapras",
		'it-it': "Lapras di Misty",
		'es-es': "Lapras de Misty",
		'pt-br': "Lapras da Misty",
		'es-mx': "Lapras de Misty"
	},


	illustrator: "Orca",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Swim Together",
			'fr-fr': "Nageons Ensemble",
			'de-de': "Gemeinsames Schwimmen",
			'it-it': "Nuotata in Compagnia",
			'es-es': "Nadar Juntos",
			'pt-br': "Nadar Juntos",
			'es-mx': "Nado en Compañía"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Misty's Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon d'Ondine, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Mistys Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon di Misty, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon de Misty, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 Pokémon da Misty no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon de Misty, muéstralos y ponlos en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'de-de': "Surfer",
			'it-it': "Surf",
			'es-es': "Surf",
			'pt-br': "Surfar",
			'es-mx': "Surf"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826068,
				tcgplayer: 632994
			}
		},
	],
}

export default card
