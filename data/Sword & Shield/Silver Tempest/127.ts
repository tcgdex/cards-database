import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru",
		de: "Togedemaru"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Toge Dash",
			fr: "Toge Ruée",
			es: "Toge Carrera",
			it: "Togescatto",
			pt: "Arremetoge",
			de: "Toge-Spurt"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate, tu rival no puede coger ninguna carta de Premio por ello.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, se este Pokémon for Nocauteado, seu oponente não poderá pegar cartas de Prêmio por isto.",
			de: "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges, wenn dieses Pokémon kampfunfähig wird, dafür keine Preiskarten nehmen."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card