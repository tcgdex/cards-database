import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [241],
	set: Set,

	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'it-it': "Miltank",
		'pt-br': "Miltank",
		'de-de': "Miltank"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Lively Tackle",
			'fr-fr': "Charge Enjouée",
			'es-es': "Placaje Animado",
			'it-it': "Vispazione",
			'pt-br': "Investida Animada",
			'de-de': "Aufpäppelnder Tackle"
		},

		effect: {
			'en-us': "If this Pokémon was healed during this turn, this attack does 90 more damage.",
			'fr-fr': "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si este Pokémon ha sido curado durante este turno, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon è stato curato durante questo turno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver sido curado durante este turno, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon während dieses Zuges geheilt wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "60+"
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
		'en-us': "This Pokémon needs to be milked every day, or else it will fall ill. The flavor of Miltank milk changes with the seasons.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740687,
				tcgplayer: 523828,
				cardtrader: 265258
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740687,
				tcgplayer: 523828,
				cardtrader: 265258
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
