import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'fr-fr': "Magnézone",
		'en-us': "Magnezone",
		'es-es': "Magnezone",
		'it-it': "Magnezone",
		'pt-br': "Magnezone",
		'de-de': "Magnezone"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Magnéton",
		'en-us': "Magneton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Répulsion Magnétique",
			'en-us': "Magnetic Repulsion",
			'es-es': "Repulsión Magnética",
			'it-it': "Repulsione Magnetica",
			'pt-br': "Repulsão Magnética",
			'de-de': "Magnetische Abstoßung"
		},

		effect: {
			'fr-fr': "Vous pouvez envoyer le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "You may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Você pode mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Du kannst das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Fatal-Foudre",
			'en-us': "Thunder",
			'es-es': "Trueno",
			'it-it': "Tuono",
			'pt-br': "Trovão",
			'de-de': "Donner"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 180
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725145,
				tcgplayer: 509829,
				cardtrader: 255625
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725145,
				tcgplayer: 509829,
				cardtrader: 255625
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
