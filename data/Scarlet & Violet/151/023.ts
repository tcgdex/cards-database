import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		fr: "Abo",
		en: "Ekans",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans",
		de: "Rettan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			fr: "Bombe Acide",
			en: "Acid Spray",
			es: "Bomba Ácida",
			it: "Acidobomba",
			pt: "Spray Ácido",
			de: "Säurespeier"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kedamahadaitai Yawarakai"
}

export default card