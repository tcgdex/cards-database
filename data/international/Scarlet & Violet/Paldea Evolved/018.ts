import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [918],
	set: Set,

	name: {
		'fr-fr': "Filentrappe",
		'en-us': "Spidops",
		'es-es': "Spidops",
		'it-it': "Spidops",
		'pt-br': "Spidops",
		'de-de': "Spinsidias"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Tissenboule",
		'en-us': "Tarountula",
		'es-es': "Tarountula",
		'it-it': "Tarountula",
		'pt-br': "Tarountula",
		'de-de': "Tarundel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Piège Emmêlant",
			'en-us': "Entangling Trap",
			'es-es': "Trampa Enredosa",
			'it-it': "Trappola Avvolgente",
			'pt-br': "Arapuca Envolvente",
			'de-de': "Verfängliche Falle"
		},

		effect: {
			'fr-fr': "Mélangez le Pokémon Actif de chaque joueur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez un nouveau Pokémon Actif en premier.)",
			'en-us': "Shuffle each player's Active Pokémon and all attached cards into their deck. (You choose a new Active Pokémon first.)",
			'es-es': "El Pokémon Activo de cada jugador y todas las cartas unidas a ellos se ponen en sus respectivas barajas y se barajan todas. (Tú eliges un nuevo Pokémon Activo en primer lugar).",
			'it-it': "Rimischia i Pokémon attivi di entrambi i giocatori e tutte le carte a essi assegnate nei rispettivi mazzi. Scegli un nuovo Pokémon attivo per primo.",
			'pt-br': "Embaralhe o Pokémon Ativo de cada jogador e todas as cartas ligadas a ele no baralho de cada jogador. (Você escolhe um novo Pokémon Ativo primeiro.)",
			'de-de': "Mische das Aktive Pokémon jedes Spielers und alle angelegten Karten in sein Deck. (Du wählst als Erster ein neues Aktives Pokémon.)"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715491,
				tcgplayer: 497429,
				cardtrader: 248315
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715491,
				tcgplayer: 497429,
				cardtrader: 248315
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "It clings to branches and ceilings using its threads and moves without a sound. It takes out its prey before the prey even notices it.",
	},
}

export default card
