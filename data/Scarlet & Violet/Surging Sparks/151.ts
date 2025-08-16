import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		en: "Bouffalant",
		fr: "Frison",
		es: "Bouffalant",
		it: "Bouffalant",
		pt: "Bouffalant",
		de: "Bisofank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Ready to Ram",
			fr: "Prêt à Charger",
			es: "Espera y Embiste",
			it: "Pronto alla Carica",
			pt: "Pronto pra Trombada",
			de: "Rammbereit"
		},

		effect: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
			de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Smashing Headbutt",
			fr: "Coup d'Boule Fracassant",
			es: "Cabezazo Destructor",
			it: "Bottintesta Distruttivo",
			pt: "Cabeçada Destruidora",
			de: "Schmetternde Kopfnuss"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Anesaki Dynamic"
}

export default card
