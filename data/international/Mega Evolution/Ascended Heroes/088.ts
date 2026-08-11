import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'es-mx': "Kirlia",
		'de-de': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia"
	},

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'es-mx': "Ralts",
		'de-de': "Trasla",
		'it-it': "Ralts",
		'pt-br': "Ralts",
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [281],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Call Sign",
			'fr-fr': "Signe d'Appel",
			'es-es': "Señal de Llamada",
			'es-mx': "Señal de Llamado",
			'de-de': "Rufzeichen",
			'it-it': "Chiamata",
			'pt-br': "Sinal de Chamada"
		},

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
		cost: ["Psychic"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'es-mx': "Psicodisparo",
			'de-de': "Psychoschuss",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico"
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
	regulationMark: "I",

	description: {
		'en-us': "It has a psychic power that enables it to distort the space around it and see into the future.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869699,
			tcgplayer: 675900
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870274,
			tcgplayer: 676921
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870273,
			tcgplayer: 677061
		}
	},
],
}

export default card
