import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [872],
	set: Set,

	name: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		en: "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Find Ice",
			fr: "Chercheur de Glace",
			de: "Eis finden",
			es: "Encontrar Hielo",
			pt: "Encontrar Gelo",
			it: "Trovaghiaccio"
		},

		effect: {
			en: "Search your deck for up to 2 {W} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {W}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 {W}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {W}, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia {W} no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			it: "Cerca nel tuo mazzo fino a due carte Energia {W}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582218
	}
}

export default card