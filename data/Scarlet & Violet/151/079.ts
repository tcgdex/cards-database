import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Ramoloss",
		en: "Slowpoke",
		es: "Slowpoke",
		it: "Slowpoke",
		pt: "Slowpoke",
		de: "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Bain de Mer",
			en: "Sea Bathing",
			es: "Baño de Mar",
			it: "Bagno al Mare",
			pt: "Banho de Mar",
			de: "Baden im Meer"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon, et il guérit de tous les États Spéciaux.",
			en: "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions.",
			es: "Cura 30 puntos de daño a este Pokémon, y este se recupera de todas las Condiciones Especiales.",
			it: "Cura questo Pokémon da 30 danni. Questo Pokémon guarisce da tutte le condizioni speciali.",
			pt: "Cure 30 pontos de dano deste Pokémon e ele se recupera de todas as Condições Especiais.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon, und es erholt sich von allen Speziellen Zuständen."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card