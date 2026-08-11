import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [55],
	set: Set,

	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Aqua Edge",
			'fr-fr': "Aqua-Dague",
			'es-es': "Filo Agua",
			'it-it': "Acquataglio",
			'pt-br': "Aqua Gume",
			'de-de': "Aquaschneide"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Entangled Dive",
			'fr-fr': "Plongeon Joint",
			'es-es': "Zambullida Enredada",
			'it-it': "Tuffo Aggrovigliato",
			'pt-br': "Mergulho Entrelaçado",
			'de-de': "Mitreißender Tauchgang"
		},

		effect: {
			'en-us': "Discard each player's Active Pokémon and all attached cards. (You choose a new Active Pokémon first.)",
			'fr-fr': "Défaussez le Pokémon Actif de chaque joueur et toutes les cartes attachées. (Vous choisissez un nouveau Pokémon Actif en premier.)",
			'es-es': "Descarta el Pokémon Activo de cada jugador y todas las cartas unidas a ellos. (Tú eliges un nuevo Pokémon Activo en primer lugar).",
			'it-it': "Scarta il Pokémon attivo di ciascun giocatore e tutte le carte a esso assegnate. Scegli un nuovo Pokémon attivo per primo.",
			'pt-br': "Descarte o Pokémon Ativo de cada jogador e todas as cartas ligadas a ele (você escolhe um novo Pokémon Ativo primeiro).",
			'de-de': "Lege das Aktive Pokémon jedes Spielers und alle angelegten Karten auf den Ablagestapel. (Du wählst als Erster ein neues Aktives Pokémon.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658534,
				tcgplayer: 272229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658534,
				tcgplayer: 272229
			}
		},
	],
}

export default card
