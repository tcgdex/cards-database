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

	illustrator: "miki kudo",
	rarity: "Holo Rare",
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
			'en-us': "Full Metal Blade",
			'fr-fr': "Lame de Métal Pur",
			'es-es': "Cuchilla Metal Total",
			'it-it': "Lama Metallica Completa",
			'pt-br': "Lâmina Metálica Máxima",
			'de-de': "Vollmetallklinge"
		},

		effect: {
			'en-us': "Discard 2 Metal Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies Metal de ce Pokémon.",
			'es-es': "Descarta 2 Energías Metal de este Pokémon.",
			'it-it': "Scarta due Energie Metal da questo Pokémon.",
			'pt-br': "Descarte 2 Energias Metal deste Pokémon.",
			'de-de': "Lege 2 Metal-Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 210,
		cost: ["Metal", "Metal", "Colorless"]
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
		'en-us': "Once upon a time, a king with an Aegislash reigned over the land. His Pokémon eventually drained him of life, and his kingdom fell with him."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545616,
				tcgplayer: 234167
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545616,
				tcgplayer: 234167
			}
		},
	],
}

export default card
