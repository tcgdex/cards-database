import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Misty's Staryu",
		fr: "Stari d'Ondine",
		de: "Mistys Sterndu",
		it: "Staryu di Misty",
		es: "Staryu de Misty",
		pt: "Staryu da Misty"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Bubble Beam",
			fr: "Bulles d'O",
			de: "Blubbstrahl",
			it: "Bollaraggio",
			es: "Rayo Burbuja",
			pt: "Jato de Bolhas"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card