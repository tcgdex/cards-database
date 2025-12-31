import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia",
		it: "Kirlia",
		es: "Kirlia",
		pt: "Kirlia",
		'es-mx': "Kirlia"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla",
		it: "Ralts",
		es: "Ralts",
		pt: "Ralts",
		'es-mx': "Ralts"
	},
	stage: "Stage1",
	dexId: [281],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Call Sign",
			fr: "Signe d'Appel",
			de: "Rufzeichen",
			it: "Chiamata",
			es: "Señal de Llamada",
			pt: "Sinal de Chamada",
			'es-mx': "Señal de Llamado"
		},

		effect: {
			en: "Search your deck for up to 3 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 3 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 3 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 3 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 3 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 3 Pokémon, muéstralos y ponlos en tu mano. Después, baraja tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			de: "Psychoschuss",
			it: "Psicosparo",
			es: "Disparo Psi",
			pt: "Tiro Psíquico",
			'es-mx': "Psicodisparo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654398,
		cardmarket: 851130
	}
}

export default card