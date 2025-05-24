import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Lucario V",
		de: "Lucario V",
		es: "Lucario V",
		pt: "Lucario V",
		it: "Lucario V",
		en: "Lucario V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Poing Dévastateur",
			de: "Schmetterhieb",
			es: "Puñetazo Devastador",
			pt: "Soco Esmagador",
			it: "Pugno Spaccatutto",
			en: "Crushing Punch"
		},

		effect: {
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			en: "Discard a Special Energy from your opponent's Active Pokémon."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Pied Cyclone",
			de: "Wirbeltritt",
			es: "Patada Ciclón",
			pt: "Chute Ciclone",
			it: "Calciovento",
			en: "Cyclone Kick"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card