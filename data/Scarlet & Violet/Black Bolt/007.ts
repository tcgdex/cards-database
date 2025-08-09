import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [549],
	set: Set,

	name: {
		en: "Lilligant",
		fr: "Fragilady",
		de: "Dressella",
		it: "Lilligant",
		pt: "Lilligant",
		es: "Lilligant",
		'es-mx': "Lilligant"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bemusing Aroma",
			fr: "Parfum Troublant",
			de: "Betörendes Aroma",
			it: "Alteraroma",
			pt: "Aroma Desconcertante",
			es: "Aroma Desconcertante",
			'es-mx': "Aroma Desconcertante"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned. If tails, your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado e Paralisado. Se sair coroa, o Pokémon Ativo do seu oponente agora estará Confuso.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Envenenado y Paralizado. Si sale cruz, el Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Cut",
			fr: "Coupe",
			de: "Zerschneider",
			it: "Taglio",
			pt: "Cortar",
			es: "Corte",
			'es-mx': "Corte"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card