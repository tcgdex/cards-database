import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		es: "Ivysaur",
		it: "Ivysaur",
		pt: "Ivysaur",
		de: "Bisaknosp"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		es: "Bulbasaur",
		it: "Bulbasaur",
		pt: "Bulbasaur",
		de: "Bisasam"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Summoning Aroma",
			fr: "Arôme Invocatoire",
			es: "Aroma Invocador",
			it: "Aroma Evocativo",
			pt: "Aroma Convocador",
			de: "Verlockendes Aroma"
		},

		effect: {
			en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 Pokémon, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due Pokémon, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 Pokémon no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Pokémon, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
			es: "Hoja Afilada",
			it: "Foglielama",
			pt: "Folha Navalha",
			de: "Rasierblatt"
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card