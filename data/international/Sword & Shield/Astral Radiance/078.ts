import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario V",
		'fr-fr': "Lucario V",
		'es-es': "Lucario V",
		'it-it': "Lucario V",
		'pt-br': "Lucario V",
		'de-de': "Lucario V"
	},

	illustrator: "takuyoa",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Crushing Punch",
			'fr-fr': "Poing Dévastateur",
			'es-es': "Puñetazo Devastador",
			'it-it': "Pugno Spaccatutto",
			'pt-br': "Soco Esmagador",
			'de-de': "Schmetterhieb"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Cyclone Kick",
			'fr-fr': "Pied Cyclone",
			'es-es': "Patada Ciclón",
			'it-it': "Calciovento",
			'pt-br': "Chute Ciclone",
			'de-de': "Wirbeltritt"
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


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 658683,
				tcgplayer: 272279
			}
		},
	],
}

export default card
