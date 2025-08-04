import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Scatterbug",
		fr: "Lépidonille",
		es: "Scatterbug",
		it: "Scatterbug",
		pt: "Scatterbug",
		de: "Purmel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		664,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ultra Evolution",
				fr: "Ultra Évolution",
				es: "Ultraevolución",
				it: "Ultra Evoluzione",
				pt: "Ultraevolução",
				de: "Ultra-Evolution"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for Vivillon and put it onto this Scatterbug to evolve it. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c’est face, cherchez un Prismillon dans votre deck, puis placez-le sur ce Lépidonille pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Vivillon y ponlo sobre este Scatterbug para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo Vivillon e mettilo sopra questo Scatterbug per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, procure por Vivillon no seu baralho e coloque-o sobre este Scatterbug para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach Vivillon und lege es auf dieses Purmel, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355526,
		tcgplayer: 165653
	}
}

export default card
