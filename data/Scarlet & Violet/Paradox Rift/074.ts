import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [386],
	set: Set,

	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys",
		de: "Deoxys"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Psypunch",
			fr: "Coup de Poing Psy",
			es: "Psicopuño",
			it: "Psicopugno",
			pt: "Soco Psíquico",
			de: "Psyhieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			en: "Genome Spiral",
			fr: "Spirale Génome",
			es: "Espiral Genoma",
			it: "Spirale del Genoma",
			pt: "Genoma Espiralado",
			de: "Genom-Spirale"
		},

		effect: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card