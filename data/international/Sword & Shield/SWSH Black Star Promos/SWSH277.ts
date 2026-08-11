import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'fr-fr': "Gorythmic",
		'de-de': "Gortrom",
		'es-es': "Rillaboom",
		'pt-br': "Rillaboom",
		'it-it': "Rillaboom",
		'en-us': "Rillaboom"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Badabouin",
		'de-de': "Chimstix",
		'es-es': "Thwackey",
		'pt-br': "Thwackey",
		'it-it': "Thwackey",
		'en-us': "Thwackey"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Regain Sylvestre",
			'de-de': "Holzsauger",
			'es-es': "Drenaje del Bosque",
			'pt-br': "Dreno de Madeira",
			'it-it': "Assorbilegno",
			'en-us': "Wood Drain"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'en-us': "Heal 30 damage from this Pokémon."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Frappes Effrénées",
			'de-de': "Tobender Wiederholungsschlag",
			'es-es': "Golpe Furioso Incesante",
			'pt-br': "Golpes Ferozes Múltiplos",
			'it-it': "Colpo Raffica Furente",
			'en-us': "Raging Repeated Strike"
		},

		effect: {
			'fr-fr': "Défaussez autant d'Énergies que vous le voulez de vos Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'de-de': "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu.",
			'es-es': "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			'it-it': "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			'en-us': "Discard any amount of Energy from your Pokémon. This attack does 30 more damage for each card you discarded in this way."
		},

		damage: "120+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",

	description: {
		'en-us': "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group.",
	},

	thirdParty: {
		cardmarket: 437154
	}
}

export default card
