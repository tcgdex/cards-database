import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
		de: "Zapdos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Wave",
			fr: "Cage Éclair",
			es: "Onda Trueno",
			it: "Tuononda",
			pt: "Onda de Trovão",
			de: "Donnerwelle"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
			fr: "Tonnerre",
			es: "Rayo",
			it: "Fulmine",
			pt: "Relâmpago",
			de: "Donnerblitz"
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon.",
			es: "Descarta todas las Energías de este Pokémon.",
			it: "Scarta tutte le Energie da questo Pokémon.",
			pt: "Descarte todas as Energias deste Pokémon.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card