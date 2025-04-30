import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		de: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		'es-mx': "Larvitar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			es: "Triturar",
			de: "Knirscher",
			it: "Sgranocchio",
			pt: "Mastigada",
			'es-mx': "Triturar"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
