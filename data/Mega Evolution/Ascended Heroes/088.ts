import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia",
		es: "Kirlia",
		'es-mx': "Kirlia",
		de: "Kirlia",
		it: "Kirlia",
		pt: "Kirlia"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Call Sign",
			fr: "Signe d'Appel",
			es: "Señal de Llamada",
			'es-mx': "Señal de Llamado",
			de: "Rufzeichen",
			it: "Chiamata",
			pt: "Sinal de Chamada"
		},

		effect: {
			en: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon, muéstralos y ponlos en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			'es-mx': "Psicodisparo",
			de: "Psychoschuss",
			it: "Psicosparo",
			pt: "Tiro Psíquico"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675900,
		cardmarket: 869699
	}
}

export default card