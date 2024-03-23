import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Ekans",
		fr: "Abo",
		es: "Ekans",
		it: "Ekans",
		pt: "Ekans"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Blend",
			fr: "Mélange Empoisonné",
			es: "Mezcla Venenosa",
			it: "Miscuglio Velenoso",
			pt: "Mistura Venenosa"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso e Envenenado."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card