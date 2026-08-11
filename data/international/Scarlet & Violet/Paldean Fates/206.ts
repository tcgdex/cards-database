import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Enhanced Fang",
			'fr-fr': "Croc Amélioré",
			'es-es': "Incisivos Mejorados",
			'it-it': "Zanne Super",
			'pt-br': "Presa Acentuada",
			'de-de': "Spezial-Zahn"
		},

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 80 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751745,
				tcgplayer: 535203,
				cardtrader: 274391
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This Pokémon makes off with heaps of fallen berries by wrapping them in its tail, which is roughly twice the length of its body.",
	},

}

export default card
