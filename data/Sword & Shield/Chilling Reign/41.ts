import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon",
		es: "Sobble",
		it: "Sobble",
		pt: "Sobble",
		de: "Memmeon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			en: "Keep Calling",
			fr: "Appel Continu",
			es: "Llama que te Llama",
			it: "Richiamata",
			pt: "Convocar Esquadrão",
			de: "Dauerruf"
		},

		effect: {
			en: "Search your deck for up to 3 Basic Rapid Strike Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon Mille Poings de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 3 Pokémon Golpe Fluido Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre Pokémon Base Colpo Rapido e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 Pokémon Golpe Fluido Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Basis-Fließender-Angriff-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Double Spin",
			fr: "Double Tour",
			es: "Doble Giro",
			it: "Doppioturbo",
			pt: "Giro Duplo",
			de: "Doppeldreher"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card