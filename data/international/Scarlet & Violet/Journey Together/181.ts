import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ruffian",
		'fr-fr': "Petite Frappe",
		'es-es': "Macarra ♂",
		'de-de': "Halbstarker",
		'it-it': "Ragazzaccio",
		'pt-br': "Baderneiro",
		'es-mx': "Truhán"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Discard a Pokémon Tool and a Special Energy from 1 of your opponent's Pokémon.",
		'fr-fr': "Défaussez un Outil Pokémon et une Énergie spéciale de l'un des Pokémon de votre adversaire.",
		'es-es': "Descarta 1 Herramienta Pokémon y 1 Energía Especial de uno de los Pokémon de tu rival.",
		'de-de': "Lege 1 Pokémon-Ausrüstung und 1 Spezial-Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel.",
		'it-it': "Scarta una carta Oggetto Pokémon e un'Energia speciale da uno dei Pokémon del tuo avversario.",
		'pt-br': "Descarte uma Ferramenta Pokémon e uma Energia Especial de 1 dos Pokémon do seu oponente.",
		'es-mx': "Descarta 1 Herramienta Pokémon y 1 Energía Especial de 1 de los Pokémon de tu rival."
	},

	trainerType: "Supporter",
	regulationMark: "I",
	illustrator: "Hideki Ishikawa",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817334,
				tcgplayer: 623608
			}
		},
	],
}

export default card
