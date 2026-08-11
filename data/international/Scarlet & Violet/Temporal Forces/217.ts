import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1022],
	set: Set,

	name: {
		'en-us': "Iron Boulder ex",
		'fr-fr': "Roc-de-Fer-ex",
		'es-es': "Ferromole ex",
		'it-it': "Massoferreo-ex",
		'pt-br': "Rocha Férrea ex",
		'de-de': "Eisenfels-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Repulsor Axe",
			'fr-fr': "Hache Répulsion",
			'es-es': "Hacha Repeledora",
			'it-it': "Scure Respingente",
			'pt-br': "Machado Repulsor",
			'de-de': "Repulsionsaxt"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 60
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Power Stomp",
			'fr-fr': "Piétinement Puissant",
			'es-es': "Pisotón Vigoroso",
			'it-it': "Forzapestone",
			'pt-br': "Pisoteada Poderosa",
			'de-de': "Kraftstampfer"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 760847,
				tcgplayer: 542938
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card