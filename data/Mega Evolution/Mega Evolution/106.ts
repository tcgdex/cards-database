import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		de: "Miltank",
		it: "Miltank",
		es: "Miltank",
		pt: "Miltank",
		'es-mx': "Miltank"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bellyful of Milk",
			fr: "Ventrée de Lait",
			de: "Voller Milchbauch",
			it: "Scorpacciata di Latte",
			es: "Atracón de Leche",
			pt: "Barriga Cheia de Leite",
			'es-mx': "Festín Lácteo"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, heal all damage from 1 of your Pokémon.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, soignez tous les dégâts de l'un de vos Pokémon.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, heile allen Schaden bei 1 deiner Pokémon.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, cura uno dei tuoi Pokémon da tutti i danni.",
			es: "Lanza 2 monedas. Si salen 2 caras, cura todos los puntos de daño a uno de tus Pokémon.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, cure todo o dano de 1 dos seus Pokémon.",
			'es-mx': "Lanza 2 monedas. Si sale cara en ambas, cura todos los puntos de daño a 1 de tus Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			de: "Tackle",
			it: "Azione",
			es: "Placaje",
			pt: "Investida",
			'es-mx': "Tacleada"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654445
	}
}

export default card