import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru",
		de: "Togedemaru"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electrifying Chance",
			fr: "Chance Électrifiante",
			es: "Oportunidad Electrizante",
			it: "Occasione Elettrizzante",
			pt: "Sorte Elétrica",
			de: "Elektrisierende Chance"
		},

		effect: {
			en: "If you have exactly 1 Prize card remaining, your opponent's Active Pokémon is now Paralyzed.",
			fr: "S'il vous reste exactement une carte Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Si te queda exactamente una carta de Premio, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Se hai esattamente una carta Premio rimanente, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Se você tiver exatamente 1 carta de Prêmio restante, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wenn du genau 1 verbleibende Preiskarte hast, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Rianti Hidayat"
}

export default card
