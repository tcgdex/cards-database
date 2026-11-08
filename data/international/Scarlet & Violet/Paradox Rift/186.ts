import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [240],
	set: Set,

	name: {
		'en-us': "Magby",
		'fr-fr': "Magby",
		'es-es': "Magby",
		'it-it': "Magby",
		'pt-br': "Magby",
		'de-de': "Magby"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scorching Heater",
			'fr-fr': "Brûleur Incandescent",
			'es-es': "Calentador Sofocante",
			'it-it': "Termoustione",
			'pt-br': "Aquecedor Ardente",
			'de-de': "Versengende Hitze"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
		}
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon makes its home near volcanoes. At the end of the day, Magby soaks in magma, resting and recovering from the day's fatigue.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 740729,
				tcgplayer: 523867,
				cardtrader: 265514
			}
		},
	],

	illustrator: "Mina Nakai",

	
}

export default card
