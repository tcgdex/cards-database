import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [240],
	set: Set,

	name: {
		en: "Magby",
		fr: "Magby",
		es: "Magby",
		it: "Magby",
		pt: "Magby",
		de: "Magby"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Scorching Heater",
			fr: "Brûleur Incandescent",
			es: "Calentador Sofocante",
			it: "Termoustione",
			pt: "Aquecedor Ardente",
			de: "Versengende Hitze"
		},

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Mina Nakai",

	thirdParty: {
		cardmarket: 740495
	}
}

export default card