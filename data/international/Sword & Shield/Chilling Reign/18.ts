import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		'en-us': "Rillaboom",
		'fr-fr': "Gorythmic",
		'es-es': "Rillaboom",
		'it-it': "Rillaboom",
		'pt-br': "Rillaboom",
		'de-de': "Gortrom"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},

	attacks: [{
		name: {
			'en-us': "Wood Drain",
			'fr-fr': "Regain Sylvestre",
			'es-es': "Drenaje del Bosque",
			'it-it': "Assorbilegno",
			'pt-br': "Dreno de Madeira",
			'de-de': "Holzsauger"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Raging Repeated Strike",
			'fr-fr': "Frappes Effrénées",
			'es-es': "Golpe Furioso Incesante",
			'it-it': "Colpo Raffica Furente",
			'pt-br': "Golpes Ferozes Múltiplos",
			'de-de': "Tobender Wiederholungsschlag"
		},

		effect: {
			'en-us': "Discard any amount of Energy from your Pokémon. This attack does 30 more damage for each card you discarded in this way.",
			'fr-fr': "Défaussez autant d'Énergies que vous le voulez de vos Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567098,
				tcgplayer: 241667
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567098,
				tcgplayer: 241667
			}
		},
	],
}

export default card
