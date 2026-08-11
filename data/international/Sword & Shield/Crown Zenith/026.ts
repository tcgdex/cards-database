import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		'en-us': "Volcanion",
		'fr-fr': "Volcanion",
		'es-es': "Volcanion",
		'it-it': "Volcanion",
		'pt-br': "Volcanion",
		'de-de': "Volcanion"
	},

	illustrator: "Shiburingaru",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Hydro Burn",
			'fr-fr': "Brûlure Hydro",
			'es-es': "Hidroquemadura",
			'it-it': "Idroustione",
			'pt-br': "Hidroqueimadura",
			'de-de': "Hydrobrand"
		},

		effect: {
			'en-us': "If this Pokémon has any Water Energy attached, this attack does 80 more damage.",
			'fr-fr': "Si au moins une Énergie Water est attachée à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Water unida a él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Water ligada a ele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691743,
				tcgplayer: 478124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691743,
				tcgplayer: 478124
			}
		},
	],
}

export default card
