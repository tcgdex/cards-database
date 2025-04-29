import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Ruffian",
		fr: "Petite Frappe",
		es: "Macarra ♂",
		de: "Halbstarker",
		it: "Ragazzaccio",
		pt: "Baderneiro",
		'es-mx': "Truhán"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Discard a Pokémon Tool and a Special Energy from 1 of your opponent's Pokémon.",
		fr: "Défaussez un Outil Pokémon et une Énergie spéciale de l'un des Pokémon de votre adversaire.",
		es: "Descarta 1 Herramienta Pokémon y 1 Energía Especial de uno de los Pokémon de tu rival.",
		de: "Lege 1 Pokémon-Ausrüstung und 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel.",
		it: "Scarta una carta Oggetto Pokémon e un'Energia speciale da uno dei Pokémon del tuo avversario.",
		pt: "Descarte uma Ferramenta Pokémon e uma Energia Especial de 1 dos Pokémon do seu oponente.",
		'es-mx': "Descarta 1 Herramienta Pokémon y 1 Energía Especial de 1 de los Pokémon de tu rival."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
