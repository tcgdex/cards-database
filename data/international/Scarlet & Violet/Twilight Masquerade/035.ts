import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [555],
	set: Set,

	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Inferno Onrush",
			'fr-fr': "Torrent d'Enfer",
			'es-es': "Infierno Desatado",
			'it-it': "Assalto Infernale",
			'pt-br': "Investida Infernal",
			'de-de': "Inferno-Ansturm"
		},

		effect: {
			'en-us': "This Pokémon also does 70 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 70 dégâts.",
			'es-es': "Este Pokémon también se hace 70 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 70 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 70 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 70 Schadenspunkte zu."
		},

		damage: 210
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "The thick arms of this hot-blooded Pokémon can deliver punches capable of obliterating a dump truck.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769209,
				tcgplayer: 550079
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769209,
				tcgplayer: 550079
			}
		},
	],

	illustrator: "OKUBO",

}

export default card