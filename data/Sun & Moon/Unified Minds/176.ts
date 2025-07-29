import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		521,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Downburst",
				fr: "Rafale Descendante",
				es: "Chaparrón",
				it: "Raffica Discendente",
				pt: "Vendaval de Cima",
				de: "Fallböe"
			},
			effect: {
				en: "You may have each player shuffle all cards attached to their Active Pokémon into their deck.",
				fr: "Vous pouvez demander à chaque joueur de mélanger toutes les cartes attachées à son Pokémon Actif avec son deck.",
				es: "Puedes hacer que cada jugador ponga todas las cartas unidas a su Pokémon Activo en su baraja y baraje todas las cartas.",
				it: "Puoi far rimischiare a ciascun giocatore tutte le carte assegnate al suo Pokémon attivo nel suo mazzo.",
				pt: "Você pode fazer com que cada jogador embaralhe todas as cartas ligadas ao próprio Pokémon Ativo no próprio baralho.",
				de: "Du kannst beide Spieler veranlassen, alle an ihr Aktives Pokémon angelegten Karten in ihr Deck zu mischen."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388667
	}
}

export default card
