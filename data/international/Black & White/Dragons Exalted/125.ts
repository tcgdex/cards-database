import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Serperior",
		'fr-fr': "Majaspic",
		'es-es': "Serperior",
		'it-it': "Serperior",
		'pt-br': "Serperior",
		'de-de': "Serpiroyal"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Royal Heal",
				'fr-fr': "Soin Royal",
				'es-es': "Curación Regia",
				'it-it': "Cura Reale",
				'pt-br': "Cura Real",
				'de-de': "Königsheiler"
			},
			effect: {
				'en-us': "At any time between turns, heal 10 damage from each of your Pokémon.",
				'fr-fr': "N’importe quand entre chaque tour, soignez 10 dégâts à chacun de vos Pokémon.",
				'es-es': "En cualquier momento entre turnos, cura 10 puntos de daño a cada uno de tus Pokémon.",
				'it-it': "Tra un turno e l’altro, in qualsiasi momento, cura ciascuno dei tuoi Pokémon da 10 danni.",
				'pt-br': "A qualquer momento entre as vezes de jogar, cure 10 de danos de cada um dos seus Pokémon no Banco.",
				'de-de': "Heile zu einem beliebigen Zeitpunkt zwischen den Zügen 10 Schadenspunkte bei jedem deiner Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Tornado",
				'fr-fr': "Phytomixeur",
			},
			effect: {
				'en-us': "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280564,
		tcgplayer: 89072
	}
}

export default card
