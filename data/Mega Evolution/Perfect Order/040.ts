import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hippowdon",
		fr: "Hippodocus",
		es: "Hippowdon",
		'es-mx': "Hippowdon",
		de: "Hippoterus",
		it: "Hippowdon",
		pt: "Hippowdon"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Twister Spewing",
			fr: "Projection de Tornades",
			es: "Tornado Regurgitante",
			'es-mx': "Chorro de Tornados",
			de: "Wirbelspeier",
			it: "Espellivortice",
			pt: "Lança Tornado"
		},

		effect: {
			en: "If you played Tarragon from your hand during this turn, discard the top 3 cards of your opponent's deck.",
			fr: "Si vous avez joué Taragon de votre main pendant ce tour, défaussez les 3 cartes du dessus du deck de votre adversaire.",
			es: "Si has jugado Estragón de tu mano durante este turno, descarta las 3 primeras cartas de la baraja de tu rival.",
			'es-mx': "Si jugaste Estragón de tu mano durante este turno, descarta las primeras 3 cartas del mazo de tu rival.",
			de: "Wenn du Tarragon während dieses Zuges aus deiner Hand gespielt hast, lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Se hai giocato Tarragon dalla tua mano durante questo turno, scarta le prime tre carte del mazzo del tuo avversario.",
			pt: "Se você jogou Tarragon da sua mão durante este turno, descarte as 3 cartas de cima do baralho do seu oponente."
		},

		damage: 80
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			'es-mx': "Impacto Pesado",
			de: "Schwerer Einschlag",
			it: "Impatto Pesante",
			pt: "Impacto Pesado"
		},

		damage: 130
	}],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684426,
		cardmarket: 877454
	}
}

export default card