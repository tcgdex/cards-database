import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [776],
	set: Set,

	name: {
		en: "Turtonator",
		fr: "Boumata",
		es: "Turtonator",
		it: "Turtonator",
		pt: "Turtonator",
		de: "Tortunator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Ryuta Fuse",

	description: {
		en: "Eating sulfur in its volcanic habitat is what causes explosive compounds to develop in its shell. Its droppings are also dangerously explosive."
	},

	attacks: [{
		cost: ["Fire", "Fighting"],

		name: {
			en: "Shell Trap",
			fr: "Carapiège",
			de: "Panzerfalle",
			es: "Coraza Trampa",
			pt: "Armadilha de Carapaça",
			it: "Gusciotrappola"
		},

		damage: 30,

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			de: "Brandstempel",
			es: "Golpe Calor",
			pt: "Choque de Calor",
			it: "Marchiafuoco"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582872,
		tcgplayer: 253358
	}
}

export default card