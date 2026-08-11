import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [449],
	set: Set,

	name: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
		'de-de': "Hippopotas",
		'it-it': "Hippopotas",
		'es-es': "Hippopotas",
		'pt-br': "Hippopotas",
		'es-mx': "Hippopotas"
	},


	illustrator: "Minahamu",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Push Down",
			'fr-fr': "Recul",
			'de-de': "Runterdrücken",
			'it-it': "Spintonare",
			'es-es': "Oprimir",
			'pt-br': "Rebaixar",
			'es-mx': "Oprimir"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825979,
				tcgplayer: 632913
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825979,
				tcgplayer: 632913
			}
		},
	],
}

export default card
