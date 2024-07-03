import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Supersonic",
			fr: "Ultrason",
			es: "Supersónico",
			it: "Supersuono",
			pt: "Supersônico",
			de: "Superschall"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
			es: "Ala Cortante",
			it: "Ala Tagliente",
			pt: "Asa Cortante",
			de: "Rasierflügel"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card