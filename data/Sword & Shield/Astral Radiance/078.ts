import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Lucario V",
		fr: "Lucario V",
		es: "Lucario V",
		it: "Lucario V",
		pt: "Lucario V",
		de: "Lucario V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Crushing Punch",
			fr: "Poing Dévastateur",
			es: "Puñetazo Devastador",
			it: "Pugno Spaccatutto",
			pt: "Soco Esmagador",
			de: "Schmetterhieb"
		},

		effect: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			es: "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			pt: "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Cyclone Kick",
			fr: "Pied Cyclone",
			es: "Patada Ciclón",
			it: "Calciovento",
			pt: "Chute Ciclone",
			de: "Wirbeltritt"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658683,
		tcgplayer: 272279
	}
}

export default card
