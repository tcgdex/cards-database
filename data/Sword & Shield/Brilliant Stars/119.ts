import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Staraptor",
		fr: "Étouraptor",
		es: "Staraptor",
		it: "Staraptor",
		pt: "Staraptor",
		de: "Staraptor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Staravia",
		fr: "Étourvol",
		es: "Staravia",
		it: "Staravia",
		pt: "Staravia",
		de: "Staravia"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Strong Breeze",
			fr: "Forte Brise",
			es: "Fuerte Brisa",
			it: "Fortebrezza",
			pt: "Brisa Intensa",
			de: "Steife Brise"
		},

		effect: {
			en: "Your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			fr: "Votre adversaire mélange avec son deck son Pokémon Actif et toutes les cartes attachées.",
			es: "Tu rival pone su Pokémon Activo y todas las cartas unidas a él en su baraja, y baraja todas las cartas.",
			it: "Il tuo avversario rimischia il suo Pokémon attivo e tutte le carte a esso assegnate nel suo mazzo.",
			pt: "Seu oponente embaralha o Pokémon Ativo dele(a) e todas as cartas ligadas a ele no próprio baralho.",
			de: "Dein Gegner mischt sein Aktives Pokémon und alle angelegten Karten in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Spinning Bird",
			fr: "Oiseau Torpille",
			es: "Pájaro Giratorio",
			it: "Giravolatile",
			pt: "Ave Giratória",
			de: "Vogelwirbel"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card