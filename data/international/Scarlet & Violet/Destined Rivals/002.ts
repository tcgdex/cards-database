import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [193],
	set: Set,

	name: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'de-de': "Yanma",
		'it-it': "Yanma",
		'es-es': "Yanma",
		'pt-br': "Yanma",
		'es-mx': "Yanma"
	},

	illustrator: "svlt",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Whirlwind",
			'fr-fr': "Cyclone",
			'de-de': "Wirbelwind",
			'it-it': "Turbine",
			'es-es': "Remolino",
			'pt-br': "Ataque de Vento",
			'es-mx': "Torbellino"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo)."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'de-de': "Rasierflügel",
			'it-it': "Ala Tagliente",
			'es-es': "Ala Cortante",
			'pt-br': "Asa Cortante",
			'es-mx': "Ala Cortante"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825876,
				tcgplayer: 632830
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825876,
				tcgplayer: 632830
			}
		},
	],
}

export default card
