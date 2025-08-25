import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [249],
	set: Set,

	name: {
		en: "Lugia ex",
		fr: "Lugia-ex",
		es: "Lugia ex",
		pt: "Lugia ex",
		it: "Lugia-ex",
		de: "Lugia-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hyper Whirlpool",
			fr: "Hyper Tourbillon",
			es: "Hipertorbellino",
			pt: "Hiper Redemoinho",
			it: "Ipermulinello",
			de: "Hyper Whirlpool"
		},

		effect: {
			en: "Flip a coin until you get tails. For each heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Jogue uma moeda até sair coroa. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			it: "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: true,
		normal: false
	},

	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 805474
	}
}

export default card