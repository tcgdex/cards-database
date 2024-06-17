import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [355],
	set: Set,

	name: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Perplex",
			fr: "Affolement",
			es: "Desconcierto",
			it: "Sconcerto",
			pt: "Perplexo",
			de: "Perplex"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Confuso.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card