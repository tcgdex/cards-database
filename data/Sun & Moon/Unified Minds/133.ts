import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
		es: "Sableye",
		it: "Sableye",
		pt: "Sableye",
		de: "Zobiris"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 80,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Mirror Gem",
				fr: "Gemme Miroir",
				es: "Gema Espejo",
				it: "Gemmaspecchio",
				pt: "Joia Espelhada",
				de: "Spiegeljuwel"
			},
			effect: {
				en: "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même s’il est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
				es: "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
				it: "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
				pt: "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
				de: "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 10,

		},
	],


	retreat: 1,



}

export default card
