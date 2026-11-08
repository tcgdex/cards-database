import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'es-es': "Mamoswine",
		'es-mx': "Mamoswine",
		'de-de': "Mamutel",
		'it-it': "Mamoswine",
		'pt-br': "Mamoswine"
	},

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
		'es-es': "Piloswine",
		'es-mx': "Piloswine",
		'de-de': "Keifel",
		'it-it': "Piloswine",
		'pt-br': "Piloswine",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [473],
	hp: 180,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Wreck",
			'fr-fr': "Anéantissement",
			'es-es': "Naufragio",
			'es-mx': "Demolición",
			'de-de': "Abreißen",
			'it-it': "Demolitore",
			'pt-br': "Destruir"
		},

		effect: {
			'en-us': "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			'fr-fr': "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			'es-es': "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			'de-de': "Wenn ein Stadion im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jenes Stadion auf den Ablagestapel.",
			'it-it': "Se c'è una carta Stadio in gioco, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			'pt-br': "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio."
		},

		damage: "120+"
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Blizzard Edge",
			'fr-fr': "Lame Tempête",
			'es-es': "Ventisca Afilada",
			'es-mx': "Filo Glacial",
			'de-de': "Blizzardklinge",
			'it-it': "Borataglio",
			'pt-br': "Nevasca Afiada"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",

	description: {
		'en-us': "A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time.",
	},

	illustrator: "Takumi Wada",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857600,
				tcgplayer: 662181,
				cardtrader: 356808
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857600,
				tcgplayer: 662181,
				cardtrader: 356808
			}
		},
	],	
}

export default card
