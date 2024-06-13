import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		fr: "Lokhlass",
		en: "Lapras",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Grimpe sur mon Dos",
			en: "Hop on My Back",
			es: "Súbete a mi Lomo",
			it: "Monta Su",
			pt: "Na Garupa",
			de: "Spring auf meinen Rücken"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Aqua-Dague",
			en: "Aqua Edge",
			es: "Filo Agua",
			it: "Acquataglio",
			pt: "Aqua Gume",
			de: "Aquaschneide"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card