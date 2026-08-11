import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias ex",
		'fr-fr': "Latias-ex",
		'es-es': "Latias ex",
		'it-it': "Latias-ex",
		'pt-br': "Latias ex",
		'de-de': "Latias-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Skyliner",
			'fr-fr': "Taxi Aérien",
			'es-es': "Estela",
			'it-it': "Aviolinea",
			'pt-br': "Carona Aérea",
			'de-de': "Luftlinie"
		},

		effect: {
			'en-us': "Your Basic Pokémon in play have no Retreat Cost.",
			'fr-fr': "Vos Pokémon de base en jeu n'ont pas de Coût de Retraite.",
			'es-es': "Tus Pokémon Básicos en juego no tienen ningún Coste de Retirada.",
			'it-it': "I tuoi Pokémon Base in gioco non hanno costo di ritirata.",
			'pt-br': "Seus Pokémon Básicos em jogo não têm custo de Recuo.",
			'de-de': "Deine Basis-Pokémon im Spiel haben keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			'en-us': "Eon Blade",
			'fr-fr': "Lame Éon",
			'es-es': "Tajo Eón",
			'it-it': "Lama Eone",
			'pt-br': "Lâmina da Eternidade",
			'de-de': "Äonenklinge"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794593,
				tcgplayer: 589984
			}
		},
	],

	suffix: "ex",
	illustrator: "takuyoa",

}

export default card
