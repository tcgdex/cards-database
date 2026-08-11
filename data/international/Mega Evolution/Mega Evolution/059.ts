import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia",
		'it-it': "Kirlia",
		'es-es': "Kirlia",
		'pt-br': "Kirlia",
		'es-mx': "Kirlia"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla",
		'it-it': "Ralts",
		'es-es': "Ralts",
		'pt-br': "Ralts",
		'es-mx': "Ralts"
	},
	stage: "Stage1",
	dexId: [281],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Call Sign",
			'fr-fr': "Signe d'Appel",
			'de-de': "Rufzeichen",
			'it-it': "Chiamata",
			'es-es': "Señal de Llamada",
			'pt-br': "Sinal de Chamada",
			'es-mx': "Señal de Llamado"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon, muéstralos y ponlos en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'de-de': "Psychoschuss",
			'it-it': "Psicosparo",
			'es-es': "Disparo Psi",
			'pt-br': "Tiro Psíquico",
			'es-mx': "Psicodisparo"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851130,
				tcgplayer: 654398
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851130,
				tcgplayer: 654398
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 862194,
			}
		},
	],
}

export default card
