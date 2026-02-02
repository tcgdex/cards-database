import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		fr: "Lougaroc-ex",
		en: "Lycanroc ex",
		es: "Lycanroc ex",
		it: "Lycanroc-ex",
		pt: "Lycanroc ex",
		de: "Wolwerock-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Rocabot",
		en: "Rockruff",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Jet-Pierres",
			en: "Rock Throw",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Crocs Terrifiants",
			en: "Scary Fangs",
			es: "Colmillos Aterradores",
			it: "Zanne Spaventose",
			pt: "Presas Assustadoras",
			de: "Gruselige Reißzähne"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 10 marqueurs de dégâts sur le Pokémon Attaquant.",
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 10 damage counters on the Attacking Pokémon.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 10 contadores de daño en el Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 10 segnalini danno sul Pokémon attaccante.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 10 contadores de dano no Pokémon Atacante.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 10 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "kawayoo",

	thirdParty: {
		cardmarket: 715592
	}
}

export default card