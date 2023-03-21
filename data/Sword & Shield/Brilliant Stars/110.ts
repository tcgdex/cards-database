import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Ultra Evolution",
			fr: "Ultra Évolution",
			es: "Ultraevolución",
			it: "Ultra Evoluzione",
			pt: "Ultraevolução",
			de: "Ultra-Evolution"
		},

		effect: {
			en: "Flip a coin. If heads, search your deck for a Haxorus and put it onto this Axew to evolve it. Then, shuffle your deck.",
			fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Tranchodon et placez-le sur ce Coupenotte pour le faire évoluer. Mélangez ensuite votre deck.",
			es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Haxorus y ponlo sobre este Axew para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, cerca nel tuo mazzo Haxorus e mettilo sopra questo Axew per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			pt: "Jogue 1 moeda. Se sair cara, procure por 1 Haxorus no seu baralho e coloque-o sobre este Axew para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			de: "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Maxax und lege es auf dieses Milza, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card