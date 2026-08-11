import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'fr-fr': "Lucario V",
		'de-de': "Lucario V",
		'es-es': "Lucario V",
		'pt-br': "Lucario V",
		'it-it': "Lucario V",
		'en-us': "Lucario V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Poing Dévastateur",
			'de-de': "Schmetterhieb",
			'es-es': "Puñetazo Devastador",
			'pt-br': "Soco Esmagador",
			'it-it': "Pugno Spaccatutto",
			'en-us': "Crushing Punch"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Pied Cyclone",
			'de-de': "Wirbeltritt",
			'es-es': "Patada Ciclón",
			'pt-br': "Chute Ciclone",
			'it-it': "Calciovento",
			'en-us': "Cyclone Kick"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 606783
	}
}

export default card
