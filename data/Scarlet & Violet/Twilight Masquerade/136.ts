import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		it: "Snorlax",
		pt: "Snorlax",
		de: "Relaxo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "But First, Food",
			fr: "Manger d'Abord",
			es: "Ante Todo, Comer",
			it: "Cibo Prima di Tutto",
			pt: "Primeiro, a Refeição",
			de: "Aber erstmal essen"
		},

		effect: {
			en: "Attach an Energy card from your hand to this Pokémon. If you do, heal 60 damage from this Pokémon.",
			fr: "Attachez une carte Énergie de votre main à ce Pokémon. Dans ce cas, soignez 60 dégâts de ce Pokémon.",
			es: "Une 1 carta de Energía de tu mano a este Pokémon. Si lo haces, cura 60 puntos de daño a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia dalla tua mano. Se lo fai, cura questo Pokémon da 60 danni.",
			pt: "Ligue uma carta de Energia da sua mão a este Pokémon. Se fizer isto, cure 60 pontos de dano deste Pokémon.",
			de: "Lege 1 Energiekarte aus deiner Hand an dieses Pokémon an. Wenn du das machst, heile 60 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card