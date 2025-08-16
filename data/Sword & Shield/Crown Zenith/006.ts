import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		pt: "Scyther",
		de: "Sichlor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Mach Cut",
			fr: "Coupe Vive",
			es: "Corte Mach",
			it: "Taglio Mach",
			pt: "Corte Supersônico",
			de: "Schallschnitt"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691723,
		tcgplayer: 478052
	}
}

export default card