import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [681],
	set: Set,

	name: {
		'en-us': "Aegislash",
		'fr-fr': "Exagide",
		'es-es': "Aegislash",
		'it-it': "Aegislash",
		'pt-br': "Aegislash",
		'de-de': "Durengard"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	abilities: [{
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
			'en-us': "Once during your turn, you may switch this Pokémon with an Aegislash in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger ce Pokémon contre un Exagide de votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu et tous les autres effets restent sur le nouveau Pokémon.",
			'es-es': "Una vez durante tu turno (antes de tu ataque), puedes cambiar este Pokémon por un Aegislash de tu mano. (Todas las cartas unidas a este Pokémon, los contadores de daño, las Condiciones Especiales, los turnos de juego y todos los demás efectos permanecen en el nuevo Pokémon).",
			'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scambiare questo Pokémon con un Aegislash nella tua mano (le carte assegnate a questo Pokémon, i segnalini danno, le condizioni speciali, il numero di turni da cui è in gioco e qualsiasi altro effetto restano sul nuovo Pokémon).",
			'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá trocar este Pokémon por um Aegislash em sua mão. (Quaisquer cards ligados a esse Pokémon, contadores de danos, Condições Especiais, vezes em jogo e quaisquer outros efeitos permanecem no novo Pokémon.)",
			'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon gegen 1 Durengard auf deiner Hand austauschen. (Alle an dieses Pokémon angelegten Karten sowie alle Schadensmarken, Speziellen Zustände, Spielzüge und alle anderen Effekte verbleiben auf dem neuen Pokémon.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Gigaton Bash",
			'fr-fr': "Ruée Gigatonne",
			'es-es': "Embate Gigatón",
			'it-it': "Colpo Gigatonico",
			'pt-br': "Pancada Gigatônica",
			'de-de': "Gigatonnen-Wumme"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon VMAX.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-VMAX.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon VMAX.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Pokémon-VMAX zugefügt wird."
		},

		damage: 70,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Its potent spectral powers allow it to manipulate others. It once used its powers to force people and Pokémon to build a kingdom to its liking."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545621,
				tcgplayer: 234169
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545621,
				tcgplayer: 234169
			}
		},
	],
}

export default card
