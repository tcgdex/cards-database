import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Ptitard",
		en: "Poliwag",
		es: "Poliwag",
		it: "Poliwag",
		pt: "Poliwag",
		de: "Quapsel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Écume",
			en: "Bubble",
			es: "Burbuja",
			it: "Bolla",
			pt: "Bolha",
			de: "Blubber"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card