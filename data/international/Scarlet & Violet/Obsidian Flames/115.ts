import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [740],
	set: Set,

	name: {
		'fr-fr': "Crabominable",
		'en-us': "Crabominable",
		'es-es': "Crabominable",
		'it-it': "Crabominable",
		'pt-br': "Crabominable",
		'de-de': "Krawell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Crabagarre",
		'en-us': "Crabrawler",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Confrontation",
			'en-us': "Confront",
			'es-es': "Confrontar",
			'it-it': "Confronto",
			'pt-br': "Confrontar",
			'de-de': "Konfrontieren"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Coup d'Articulations",
			'en-us': "Knuckle Impact",
			'es-es': "Impacto Nudillo",
			'it-it': "Impatto Nocche",
			'pt-br': "Impacto Ossudo",
			'de-de': "Knöchelprall"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'en-us': "During your next turn, this Pokémon can't attack.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	description: {
		'en-us': "The detached pincers of these Pokémon are delicious. Some Trainers bring Lechonk into the mountains just to search for them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725195,
				tcgplayer: 509842,
				cardtrader: 255800
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725195,
				tcgplayer: 509842,
				cardtrader: 255800
			}
		},
	],

	illustrator: "Misa Tsutsui",

	
}

export default card
