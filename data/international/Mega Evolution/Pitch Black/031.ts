import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Slowbro ex",
		'fr-fr': "Méga-Flagadoss-ex",
		'es-es': "Mega-Slowbro ex",
		'es-mx': "Mega-Slowbro ex",
		'de-de': "Mega-Lahmus-ex",
		'it-it': "Mega Slowbro-ex",
		'pt-br': "Mega Slowbro ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [80],
	hp: 330,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Slowpoke"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Shellnado Spin",
			'fr-fr': "Tournade",
			'es-es': "Giro Caparazón",
			'es-mx': "Tornado Acorazado",
			'de-de': "Panzernado",
			'it-it': "Guscioturbine",
			'pt-br': "Cicloncha"
		},

		cost: ["Psychic", "Psychic", "Psychic"],

		damage: 180,

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), place 12 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 12 contadores de daño en el Pokémon Atacante.",
			'es-mx': "Durante el próximo turno de tu rival, si este Pokémon recibe daño de un ataque (incluso si queda Fuera de Combate), pon 12 contadores de daño en el Pokémon Atacante.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 12 segnalini danno sul Pokémon attaccante.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 12 contadores de dano no Pokémon Atacante."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895818,
				tcgplayer: 704788
			}
		},
	],
}

export default card
