import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charcadet",
		fr: "Charbambin",
		de: "Knarbon",
		it: "Charcadet",
		es: "Charcadet",
		pt: "Charcadet"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [935],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Gather Strength",
			fr: "Pouvoir Collecté",
			de: "Kraftsammler",
			it: "Radunaforze",
			es: "Reunir Fuerzas",
			pt: "Reunir Força"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			de: "Hacker",
			it: "Ceffone",
			es: "Cortar",
			pt: "Cortar"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",
}

export default card
