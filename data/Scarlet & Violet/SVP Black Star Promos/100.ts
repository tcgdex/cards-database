import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Grafaiai ex",
		fr: "Tag-Tag-ex",
		es: "Grafaiai ex",
		it: "Grafaiai-ex",
		pt: "Grafaiai ex",
		de: "Affiti-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Numbing Saliva",
			fr: "Salive Paralysante",
			es: "Saliva Sedante",
			it: "Saliva Immobilizzante",
			pt: "Saliva Entorpecente",
			de: "Betäubender Speichel"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Toxic Throw",
			fr: "Lancé Toxique",
			es: "Lanzamiento Tóxico",
			it: "Lancio Tossico",
			pt: "Arremesso Tóxico",
			de: "Toxinwurf"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your next turn, this Pokémon can't use Toxic Throw.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Lancé Toxique.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante tu próximo turno, este Pokémon no puede usar Lanzamiento Tóxico.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il tuo prossimo turno, questo Pokémon non può usare Lancio Tossico.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o seu próximo turno, este Pokémon não poderá usar Arremesso Tóxico.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während deines nächsten Zuges kann dieses Pokémon Toxinwurf nicht einsetzen."
		},

		damage: 180
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "aky CG Works"
}

export default card