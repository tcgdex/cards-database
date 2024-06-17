import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mysterious Beam",
			fr: "Rayon Mystérieux",
			es: "Rayo Misterioso",
			it: "Misticoraggio",
			pt: "Raio Misterioso",
			de: "Seltsamer Strahl"
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Suffocating Gas",
			fr: "Gaz Suffocant",
			es: "Gas Sofocante",
			it: "Gas Soffocante",
			pt: "Gás Asfixiante",
			de: "Würgegas"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card