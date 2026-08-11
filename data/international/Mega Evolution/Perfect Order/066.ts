import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [661],

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'es-mx': "Fletchling",
		'de-de': "Dartiri",
		'it-it': "Fletchling",
		'pt-br': "Fletchling"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Chirp",
			'fr-fr': "Gazouillis",
			'es-es': "Gorjeo",
			'es-mx': "Pío Pío",
			'de-de': "Zwitscherer",
			'it-it': "Cinguettio",
			'pt-br': "Gorjeio"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Pokémon with {F} Resistance, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon avec une Résistance à {F}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon con Resistencia a {F}, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon con Resistencia a {F}, muéstralos y ponlos en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon mit {F}-Resistenz, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon con resistenza al tipo {F}, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon com Resistência {F} no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'es-mx': "Picotazo",
			'de-de': "Pikser",
			'it-it': "Beccata",
			'pt-br': "Bicada"
		},

		damage: 20
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
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684403,
				cardmarket: 877482
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684403,
				cardmarket: 877482
			}
		}
	],

}

export default card
