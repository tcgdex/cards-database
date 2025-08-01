import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Unown",
		fr: "Zarbi",
		es: "Unown",
		it: "Unown",
		pt: "Unown",
		de: "Icognito"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Farewell Letter",
				fr: "Lettre d'Adieu",
				es: "Carta de Despedida",
				it: "Lettera di Addio",
				pt: "Carta de Despedida",
				de: "Abschiedsbrief"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may discard this Pokémon and all cards attached to it (this does not count as a Knock Out). If you do, draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez défausser ce Pokémon et toutes les cartes qui lui sont attachées (cela n'équivaut pas à un K.O.). Dans ce cas, piochez une carte.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes descartar este Pokémon y todas las cartas unidas a él (esto no equivale a dejarlo Fuera de Combate). Si lo haces, roba 1 carta.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scartare questo Pokémon e tutte le carte a esso assegnate (quest'azione non vale come KO). Se lo fai, pesca una carta.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver no seu Banco, você pode descartá-lo e a todos os cards ligados a ele (isso não conta como Nocaute). Se fizer isso, compre um card.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, dieses Pokémon und alle daran angelegten Karten auf deinen Ablagestapel legen (dieses Pokémon wird dadurch nicht kampfunfähig). Wenn du das machst, ziehe 1 Karte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance Cachée",
				es: "Poder Oculto",
				it: "Introforza",
				pt: "Poder Oculto",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 284211
	}
}

export default card
