import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		'en-us': "Kyogre ex",
		'fr-fr': "Kyogre-ex",
		'de-de': "Kyogre-ex",
		'es-es': "Kyogre ex",
		'it-it': "Kyogre-ex",
		'pt-br': "Kyogre ex"
	},

	suffix: "ex",
	illustrator: "takuyoa",
	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Winding Waves",
			'fr-fr': "Vagues Onduleuses",
			'de-de': "Windende Wellen",
			'es-es': "Oleaje Eólico",
			'it-it': "Onde Vorticose",
			'pt-br': "Ondas Sinuosas"
		},

		effect: {
			'en-us': "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Vous pouvez envoyer le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Du kannst das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'es-es': "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		},

		damage: 80
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Tidal Surge",
			'fr-fr': "Marée Déferlante",
			'de-de': "Brandungsflut",
			'es-es': "Marejada",
			'it-it': "Marea Impetuosa",
			'pt-br': "Maré Repentina"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon."
		},

		damage: 230
	}],

	retreat: 3,
	regulationMark: "H",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 810393,
				tcgplayer: 619580
			},
		}
	],
}

export default card
