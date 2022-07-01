import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Ice Beam",
			fr: "Laser Glace",
			es: "Rayo Hielo",
			it: "Geloraggio",
			pt: "Raio Congelante",
			de: "Eisstrahl"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surfar",
			de: "Surfer"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card