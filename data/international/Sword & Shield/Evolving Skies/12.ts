import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque",
		'es-es': "Crustle",
		'it-it': "Crustle",
		'pt-br': "Crustle",
		'de-de': "Castellith"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "sowsow",

	attacks: [{
		name: {
			'en-us': "X-Scissor",
			'fr-fr': "Plaie Croix",
			'es-es': "Tijera X",
			'it-it': "Forbice X",
			'pt-br': "X-Scissor",
			'de-de': "Kreuzschere"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Flip a coin. If heads, this attack does 60 more damage.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Hammer In",
			'de-de': "Einhämmern"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'es-es': "Dwebble",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'de-de': "Lithomith"
	},

	description: {
		'en-us': "Its thick claws are its greatest weapons. They're mighty enough to crack Rhyperior's carapace."
	},

	dexId: [558],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574036,
				tcgplayer: 246826
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574036,
				tcgplayer: 246826
			}
		},
	],
}

export default card
