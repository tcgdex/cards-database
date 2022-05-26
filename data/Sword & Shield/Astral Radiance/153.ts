import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Sweet Honey"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Choose 1 of your Pokémon, and then flip a coin until you get tails. For each heads, heal 40 damage from that Pokémon.",
		fr: "Choisissez l'un de vos Pokémon, puis lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, soignez 40 dégâts de ce Pokémon-là.",
		es: "Elige 1 de tus Pokémon, y luego lanza 1 moneda hasta que salga cruz. Por cada cara, cura 40 puntos de daño a ese Pokémon.",
		it: "Scegli uno dei tuoi Pokémon, poi lancia una moneta finché non esce croce. Ogni volta che esce testa, cura quel Pokémon da 40 danni.",
		pt: "Escolha 1 dos seus Pokémon, depois jogue 1 moeda até sair coroa. Para cada cara, cure 40 pontos de dano daquele Pokémon.",
		de: "Wähle 1 deiner Pokémon und wirf anschließend so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Heile pro Kopf 40 Schadenspunkte bei jenem Pokémon."
	},

	trainerType: "Item",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card