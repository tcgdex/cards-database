import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Dracozolt VMAX",
		fr: "Galvagon VMAX",
		es: "Dracozolt VMAX",
		it: "Dracozolt VMAX",
		pt: "Dracozolt VMAX",
		de: "Lectragon VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			en: "Spark Trap",
			fr: "Piège Étincelle",
			es: "Trampa Chispeante",
			it: "Scintillatrappola",
			pt: "Spark Trap",
			de: "Funkenfalle"
		},

		effect: {
			en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même s’il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 12 contadores de daño en el Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 12 segnalini danno sul Pokémon attaccante.",
			pt: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Max Impact",
			fr: "Impactomax",
			es: "Maximpacto",
			it: "Dynaimpatto",
			pt: "Max Impact",
			de: "Dyna-Einschlag"
		},

		damage: 200,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card