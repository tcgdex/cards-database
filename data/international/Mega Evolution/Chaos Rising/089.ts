import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute's time.",
	},


	name: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
		'es-es': "Frogadier",
		'es-mx': "Frogadier",
		'de-de': "Amphizel",
		'it-it': "Frogadier",
		'pt-br': "Frogadier"
	},

	illustrator: "Susumu Maeya",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [657],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Froakie"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Summoning Jutsu",
			'fr-fr': "Jutsu Invocatoire",
			'es-es': "Llamamiento Jutsu",
			'es-mx': "Jutsu de Invocación",
			'de-de': "Beschwörendes Jutsu",
			'it-it': "Jutsu Evocativa",
			'pt-br': "Invoca-jitsu"
		},

		cost: ["Water"],

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon, muéstralos y ponlos en tu mano. Después, baraja tu mazo.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague",
			'es-es': "Filo Agua",
			'es-mx': "Filo Acuático",
			'de-de': "Aquaschneide",
			'it-it': "Acquataglio",
			'pt-br': "Aqua Gume"
		},

		cost: ["Water", "Water"],
		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886481,
				tcgplayer: 693491
			}
		},
	],
}

export default card
