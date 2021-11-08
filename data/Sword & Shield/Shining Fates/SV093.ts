import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Chinchidou",
		en: "Minccino",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Coup d'Œil",
			en: "Glance",
			es: "Ojeada",
			it: "Occhiatina",
			pt: "Olhada de Relance",
			de: "Kurzer Blick"
		},

		effect: {
			fr: "Regardez la carte du dessus du deck de votre adversaire.",
			en: "Look at the top card of your opponent's deck.",
			es: "Mira la primera carta de la baraja de tu rival.",
			it: "Guarda la prima carta del mazzo del tuo avversario.",
			pt: "Olhe a carta de cima do baralho do seu oponente.",
			de: "Schau dir die oberste Karte des Decks deines Gegners an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Plumo-Queue",
			en: "Tail Slap",
			es: "Plumerazo",
			it: "Spazzasberla",
			pt: "Tapa de Cauda",
			de: "Kehrschelle"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "The way it brushes away grime with its tail can be helpful when cleaning. But its focus on spotlessness can make cleaning more of a hassle."
	}
}

export default card
