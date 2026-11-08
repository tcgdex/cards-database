import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'de-de': "Miltank",
		'it-it': "Miltank",
		'es-es': "Miltank",
		'pt-br': "Miltank",
		'es-mx': "Miltank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [241],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bellyful of Milk",
			'fr-fr': "Ventrée de Lait",
			'de-de': "Voller Milchbauch",
			'it-it': "Scorpacciata di Latte",
			'es-es': "Atracón de Leche",
			'pt-br': "Barriga Cheia de Leite",
			'es-mx': "Festín Lácteo"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, heal all damage from 1 of your Pokémon.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, soignez tous les dégâts de l'un de vos Pokémon.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, heile allen Schaden bei 1 deiner Pokémon.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, cura uno dei tuoi Pokémon da tutti i danni.",
			'es-es': "Lanza 2 monedas. Si salen 2 caras, cura todos los puntos de daño a uno de tus Pokémon.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, cure todo o dano de 1 dos seus Pokémon.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, cura todos los puntos de daño a 1 de tus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851177,
				tcgplayer: 654445
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851177,
				tcgplayer: 654445
			}
		},
	],
}

export default card
