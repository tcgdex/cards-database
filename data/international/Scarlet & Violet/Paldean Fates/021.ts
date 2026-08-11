import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [171],
	set: Set,

	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Aqua Spark",
			'fr-fr': "Aqua-Étincelle",
			'es-es': "Chispa Aqua",
			'it-it': "Acquascintilla",
			'pt-br': "Faísca de Água",
			'de-de': "Aquafunke"
		},

		effect: {
			'en-us': "If this Pokémon has any {W} Energy attached, this attack does 120 more damage.",
			'fr-fr': "Si au moins une Énergie {W} est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía {W} unida, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie {W} assegnate, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia {W} ligada a ele, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 {W}-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
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
			type: 'normal',
			thirdParty: {
				cardmarket: 751551,
				tcgplayer: 534167,
				cardtrader: 274205
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751551,
				tcgplayer: 534167,
				cardtrader: 274205
			}
		},
	],

	illustrator: "aspara",

	description: {
		'en-us': "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack.",
	},

}

export default card
