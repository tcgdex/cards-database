import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [907],
	set: Set,

	name: {
		'en-us': "Floragato",
		'fr-fr': "Matourgeon",
		'es-es': "Floragato",
		'it-it': "Floragato",
		'pt-br': "Floragato",
		'de-de': "Feliospa"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Sprigatito",
		'fr-fr': "Poussacha",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'de-de': "Felori"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Magic Whip",
			'fr-fr': "Fouet Magique",
			'es-es': "Latigazo Mágico",
			'it-it': "Magifrusta",
			'pt-br': "Chicote Mágico",
			'de-de': "Magische Peitsche"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "GIDORA",
	description: {
		'en-us': "Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751802,
				tcgplayer: 537980
			},
		}
	],
}

export default card
