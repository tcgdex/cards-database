import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Stance Change",
				'fr-fr': "Déclic Tactique",
				'es-es': "Cambio Táctico",
				'it-it': "Accendilotta",
				'pt-br': "Mudança em Posição",
				'de-de': "Taktikwechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may switch this Pokémon with an Aegislash in your hand. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Exagide dans votre main. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar este Pokémon por un Aegislash de tu mano. (Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon).",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare questo Pokémon con un Aegislash nella tua mano (le carte assegnate a questo Pokémon, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon).",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá trocar este Pokémon por um Aegislash em sua mão. (Quaisquer cards ligados a esse Pokémon, contadores de danos, Condições Especiais, vezes em jogo e quaisquer outros efeitos permanecem no novo Pokémon.)",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon gegen 1 Durengard auf deiner Hand austauschen. (Alle an dieses Pokémon angelegten Karten sowie alle Schadensmarken, Speziellen Zustände, Spielzüge und alle anderen Effekte verbleiben auf dem neuen Pokémon.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "King's Shield",
				'fr-fr': "Bouclier Royal",
				'es-es': "Escudo Real",
				'it-it': "Scudo Reale",
				'pt-br': "Escudo do Rei",
				'de-de': "Königsschild"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks during your opponent's next turn. This Pokémon can't use King's Shield during your next turn.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Bouclier Royal pendant votre prochain tour.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival. Este Pokémon no puede usar Escudo Real durante tu próximo turno.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario. Durante il tuo prossimo turno, questo Pokémon non può usare Scudo Reale.",
				'pt-br': "Impede todos os danos causados a este Pokémon por ataques durante a próxima vez de jogar do seu oponente. Este Pokémon não poderá usar o Escudo do Rei em sua próxima vez de jogar.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde. Dieses Pokémon kann während deines nächsten Zuges Königsschild nicht einsetzen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Generations of kings were attended by these Pokémon, which used their spectral power to manipulate and control people and Pokémon.",
	},

	thirdParty: {
		cardmarket: 281422,
		tcgplayer: 83463
	}
}

export default card
