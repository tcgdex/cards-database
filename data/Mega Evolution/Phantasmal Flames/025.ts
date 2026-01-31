import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		'es-mx': "Mamoswine",
		de: "Mamutel",
		it: "Mamoswine",
		pt: "Mamoswine"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	stage: "Stage2",
	dexId: [473],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wreck",
			fr: "Anéantissement",
			es: "Naufragio",
			'es-mx': "Demolición",
			de: "Abreißen",
			it: "Demolitore",
			pt: "Destruir"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 120 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			es: "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta ese Estadio.",
			de: "Wenn ein Stadion im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jenes Stadion auf den Ablagestapel.",
			it: "Se c'è una carta Stadio in gioco, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquele Estádio."
		},

		damage: "120+"
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blizzard Edge",
			fr: "Lame Tempête",
			es: "Ventisca Afilada",
			'es-mx': "Filo Glacial",
			de: "Blizzardklinge",
			it: "Borataglio",
			pt: "Nevasca Afiada"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			'es-mx': "Descarta 2 Energías de este Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon."
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857600,
		tcgplayer: 662181
	}
}

export default card