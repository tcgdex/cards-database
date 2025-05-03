import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Kilowattrel",
		fr: "Fulgulairo",
		es: "Kilowattrel",
		it: "Kilowattrel",
		pt: "Kilowattrel",
		de: "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Glide",
			fr: "Glissement",
			es: "Planeo",
			it: "Aliante",
			pt: "Planeio",
			de: "Gleiten"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Storm Bolt",
			fr: "Éclair Tempête",
			es: "Rayo Tormentoso",
			it: "Fulmine Tempestoso",
			pt: "Temporal de Raios",
			de: "Unwetterblitz"
		},

		effect: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
