import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Great Tusk",
		fr: "Fort-Ivoire",
		es: "Colmilargo",
		it: "Grandizanne",
		pt: "Presa Grande"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Land Collapse",
			fr: "Effondrement de Terrain",
			es: "Derrumbe de Tierra",
			it: "Crolloterra",
			pt: "Colapso Terrestre"
		},

		effect: {
			en: "Discard the top card of your opponent's deck. If you played an Ancient Supporter card from your hand during this turn, discard 3 more cards in this way.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué une carte Supporter Temps passé de votre main pendant ce tour, défaussez 3 cartes supplémentaires de cette façon.",
			es: "Descarta la primera carta de la baraja de tu rival. Si has jugado una carta de Partidario del pasado de tu mano durante este turno, descarta 3 cartas más de esta manera.",
			it: "Scarta la prima carta del mazzo del tuo avversario. Se hai giocato una carta Aiuto Tempo Passato dalla tua mano durante questo turno, scarta altre tre carte in questo modo.",
			pt: "Descarte a carta de cima do baralho do seu oponente. Se você jogou uma carta de Apoiador Ancestral da sua mão durante este turno, descarte 3 cartas a mais desta forma."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"],

		name: {
			en: "Giant Tusk",
			fr: "Défense Géante",
			es: "Colmillo Gigante",
			it: "Gigaspuntone",
			pt: "Presa Gigante"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card