import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Giacomo",
		fr: "Brome",
		es: "Anán",
		pt: "Giacomo",
		it: "Romelio",
		de: "Pinio"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Discard a Special Energy from each of your opponent's Pokémon.",
		fr: "Défaussez une Énergie spéciale de chacun des Pokémon de votre adversaire.",
		es: "Descarta 1 Energía Especial de cada uno de los Pokémon de tu rival.",
		pt: "Descarte uma Energia Especial de cada um dos Pokémon do seu oponente.",
		it: "Scarta un'Energia speciale da ciascuno dei Pokémon del tuo avversario.",
		de: "Lege 1 Spezial-Energie von jedem Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "GOSSAN"
}

export default card