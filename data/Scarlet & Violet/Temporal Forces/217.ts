import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Boulder ex",
		fr: "Roc-de-Fer-ex",
		es: "Ferromole ex",
		it: "Massoferreo-ex",
		pt: "Rocha Férrea ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Repulsor Axe",
			fr: "Hache Répulsion",
			es: "Hacha Repeledora",
			it: "Scure Respingente",
			pt: "Machado Repulsor"
		},

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante."
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Power Stomp",
			fr: "Piétinement Puissant",
			es: "Pisotón Vigoroso",
			it: "Forzapestone",
			pt: "Pisoteada Poderosa"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 200
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card