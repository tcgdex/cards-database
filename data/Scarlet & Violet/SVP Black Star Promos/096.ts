import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [967],
	set: Set,

	name: {
		en: "Cyclizar",
		fr: "Motorizard",
		es: "Cyclizar",
		it: "Cyclizar",
		pt: "Cyclizar",
		de: "Mopex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flat-Out Dash",
			fr: "Ruée Directe",
			es: "A Todo Trapo",
			it: "Corsa Tuttabirra",
			pt: "Arremetida Desesperada",
			de: "Vollgas-Spurt"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, draw a card.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, compre uma carta.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Ziehe pro Kopf 1 Karte."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Power Tackle",
			fr: "Tacle Puissant",
			es: "Placaje Poderoso",
			it: "Forzazione",
			pt: "Investida Poderosa",
			de: "Kraft-Tackle"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Hasuno"
}

export default card