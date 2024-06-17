import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [55],
	set: Set,

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Aqua Edge",
			fr: "Aqua-Dague",
			es: "Filo Agua",
			it: "Acquataglio",
			pt: "Aqua Gume",
			de: "Aquaschneide"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Entangled Dive",
			fr: "Plongeon Joint",
			es: "Zambullida Enredada",
			it: "Tuffo Aggrovigliato",
			pt: "Mergulho Entrelaçado",
			de: "Mitreißender Tauchgang"
		},

		effect: {
			en: "Discard each player's Active Pokémon and all attached cards. (You choose a new Active Pokémon first.)",
			fr: "Défaussez le Pokémon Actif de chaque joueur et toutes les cartes attachées. (Vous choisissez un nouveau Pokémon Actif en premier.)",
			es: "Descarta el Pokémon Activo de cada jugador y todas las cartas unidas a ellos. (Tú eliges un nuevo Pokémon Activo en primer lugar).",
			it: "Scarta il Pokémon attivo di ciascun giocatore e tutte le carte a esso assegnate. Scegli un nuovo Pokémon attivo per primo.",
			pt: "Descarte o Pokémon Ativo de cada jogador e todas as cartas ligadas a ele (você escolhe um novo Pokémon Ativo primeiro).",
			de: "Lege das Aktive Pokémon jedes Spielers und alle angelegten Karten auf den Ablagestapel. (Du wählst als Erster ein neues Aktives Pokémon.)"
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card