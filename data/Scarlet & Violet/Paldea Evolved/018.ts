import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Filentrappe",
		en: "Spidops",
		es: "Spidops",
		it: "Spidops",
		pt: "Spidops",
		de: "Spinsidias"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			fr: "Piège Emmêlant",
			en: "Entangling Trap",
			es: "Trampa Enredosa",
			it: "Trappola Avvolgente",
			pt: "Arapuca Envolvente",
			de: "Verfängliche Falle"
		},

		effect: {
			fr: "Mélangez le Pokémon Actif de chaque joueur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez un nouveau Pokémon Actif en premier.)",
			en: "Shuffle each player's Active Pokémon and all attached cards into their deck. (You choose a new Active Pokémon first.)",
			es: "El Pokémon Activo de cada jugador y todas las cartas unidas a ellos se ponen en sus respectivas barajas y se barajan todas. (Tú eliges un nuevo Pokémon Activo en primer lugar).",
			it: "Rimischia i Pokémon attivi di entrambi i giocatori e tutte le carte a essi assegnate nei rispettivi mazzi. Scegli un nuovo Pokémon attivo per primo.",
			pt: "Embaralhe o Pokémon Ativo de cada jogador e todas as cartas ligadas a ele no baralho de cada jogador. (Você escolhe um novo Pokémon Ativo primeiro.)",
			de: "Mische das Aktive Pokémon jedes Spielers und alle angelegten Karten in sein Deck. (Du wählst als Erster ein neues Aktives Pokémon.)"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Oswaldo KATO",

	thirdParty: {
		cardmarket: 715491
	}
}

export default card