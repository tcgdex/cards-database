import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Klawf",
		fr: "Craparoi",
		es: "Klawf",
		de: "Klibbe",
		it: "Klawf",
		pt: "Klawf",
		'es-mx': "Klawf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Snipping Pincers",
			fr: "Pinces Coupantes",
			es: "Pinzas Recortadoras",
			de: "Schnippelnde Kneifer",
			it: "Chele Taglienti",
			pt: "Pinças Esfrangalhadoras",
			'es-mx': "Pinzas Recortadoras"
		},

		effect: {
			en: "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			de: "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue 2 moedas. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			de: "Einhämmern",
			it: "Martello",
			pt: "Martelada",
			'es-mx': "Martillar"
		},

		damage: 100
	}],

	retreat: 3,
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
