import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [610],
	set: Set,

	name: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Ultra Evolution",
			'fr-fr': "Ultra Évolution",
			'es-es': "Ultraevolución",
			'it-it': "Ultra Evoluzione",
			'pt-br': "Ultraevolução",
			'de-de': "Ultra-Evolution"
		},

		effect: {
			'en-us': "Flip a coin. If heads, search your deck for a Haxorus and put it onto this Axew to evolve it. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce. Si c'est face, cherchez dans votre deck un Tranchodon et placez-le sur ce Coupenotte pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Haxorus y ponlo sobre este Axew para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo Haxorus e mettilo sopra questo Axew per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 Haxorus no seu baralho e coloque-o sobre este Axew para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Maxax und lege es auf dieses Milza, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "These Pokémon nest in the ground and use their tusks to crush hard berries. Crushing berries is also how they test each other's strength.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608656,
				tcgplayer: 263830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608656,
				tcgplayer: 263830
			}
		},
	],
}

export default card
