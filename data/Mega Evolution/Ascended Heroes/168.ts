import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [396],

	name: {
		en: "Larry's Starly",
		fr: "Étourmi d'Okuba",
		es: "Starly de Laureano",
		'es-mx': "Starly de Laureano",
		de: "Aokis Staralili",
		it: "Starly di Ubaldo",
		pt: "Starly do Lauro"
	},

	illustrator: "Natsumi Miyanose",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Minor Errand-Running",
			fr: "Rendez-Vous Mineur",
			es: "Recado Menor",
			'es-mx': "Pequeño Encargo",
			de: "Kleine Besorgung",
			it: "Lavoretto Rapido",
			pt: "Pequena Missão"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía Básica, muéstralas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			'es-mx': "Planeo",
			de: "Gleiten",
			it: "Aliante",
			pt: "Planeio"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675980,
		cardmarket: 869779
	}
}

export default card