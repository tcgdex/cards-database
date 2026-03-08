import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [614],
	set: Set,

	name: {
		fr: "Polagriffe",
		en: "Beartic",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		fr: "Polarhume",
		en: "Cubchoo",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Poing Stalactite",
			en: "Icicle Punch",
			es: "Puñetazo Gélido",
			it: "Freddopugno",
			pt: "Soco de Icelo",
			de: "Eiswatsche"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Nettoyage Givré",
			en: "Frost Purge",
			es: "Purga Helada",
			it: "Gelorimozione",
			pt: "Expurgação Congelada",
			de: "Eislöschung"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies de ce Pokémon.",
			en: "Flip a coin. If tails, discard all Energy from this Pokémon.",
			es: "Lanza 1 moneda. Si sale cruz, descarta todas las Energías de este Pokémon.",
			it: "Lancia una moneta. Se esce croce, scarta tutte le Energie da questo Pokémon.",
			pt: "Jogue uma moeda. Se sair coroa, descarte todas as Energias deste Pokémon.",
			de: "Wirf 1 Münze. Lege bei Zahl alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Misa Tsutsui",

	thirdParty: {
		cardmarket: 725134
	}
}

export default card