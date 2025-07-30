import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		en: "Electrike",
		fr: "Dynavolt",
		es: "Electrike",
		it: "Electrike",
		pt: "Electrike",
		de: "Frizelbliz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zap Kick",
			fr: "Coup de Pied Ravageur",
			es: "Electropatada",
			it: "Dinamocalcio",
			pt: "Chute Zap",
			de: "Stromtritt"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
			es: "Colmillo Rayo",
			it: "Fulmindenti",
			pt: "Presa Trovejante",
			de: "Donnerzahn"
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
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674064
	}
}

export default card