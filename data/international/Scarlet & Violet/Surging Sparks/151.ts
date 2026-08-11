import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		'en-us': "Bouffalant",
		'fr-fr': "Frison",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ready to Ram",
			'fr-fr': "Prêt à Charger",
			'es-es': "Espera y Embiste",
			'it-it': "Pronto alla Carica",
			'pt-br': "Pronto pra Trombada",
			'de-de': "Rammbereit"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Smashing Headbutt",
			'fr-fr': "Coup d'Boule Fracassant",
			'es-es': "Cabezazo Destructor",
			'it-it': "Bottintesta Distruttivo",
			'pt-br': "Cabeçada Destruidora",
			'de-de': "Schmetternde Kopfnuss"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794524,
				tcgplayer: 589877
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794524,
				tcgplayer: 589877
			}
		},
	],

	illustrator: "Anesaki Dynamic",

}

export default card
