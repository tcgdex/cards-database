import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [61],
	set: Set,

	name: {
		en: "Poliwhirl",
		fr: "Têtarte",
		es: "Poliwhirl",
		it: "Poliwhirl",
		pt: "Poliwhirl",
		de: "Quaputzi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hypnosis",
			fr: "Hypnose",
			es: "Hipnosis",
			it: "Ipnosi",
			pt: "Hipnose",
			de: "Hypnose"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Double Slap",
			fr: "Torgnoles",
			es: "Doble Bofetón",
			it: "Doppiasberla",
			pt: "Tapa Duplo",
			de: "Duplexhieb"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Poliwag",
		fr: "Ptitard",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	}
}

export default card