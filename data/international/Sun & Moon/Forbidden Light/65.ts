import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		674,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Act Tough",
				'fr-fr': "Dur à Cuire",
				'es-es': "Hacerse el Duro",
				'it-it': "Fatti Miei",
				'pt-br': "Agir como um Durão",
				'de-de': "Harter Bursche"
			},
			effect: {
				'en-us': "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				'fr-fr': "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 30 danni in più.",
				'pt-br': "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "There's no point to the leaf in its mouth, aside from an effort to look cool. It's mischievous, so it's not well suited to inexperienced Trainers.",
	},

	thirdParty: {
		cardmarket: 355583,
		tcgplayer: 165717
	}
}

export default card
