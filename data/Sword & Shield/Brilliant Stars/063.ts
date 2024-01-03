import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Chimecho",
		fr: "Éoko",
		es: "Chimecho",
		it: "Chimecho",
		pt: "Chimecho",
		de: "Palimpalim"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Clear Tone",
			fr: "Tonalité Libre",
			es: "Tono Claro",
			it: "Tono Chiaro",
			pt: "Tom Inconfundível",
			de: "Klarer Ton"
		},

		effect: {
			en: "Search your deck for up to 2 Special Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie spéciale, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Especial, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia speciale, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Especial no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Spezial-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hang Down",
			fr: "Suspension",
			es: "Prender",
			it: "Tirar Giù",
			pt: "Dependurar",
			de: "Herunterhängen"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card