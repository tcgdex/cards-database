import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage.",
				'fr-fr': "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 20 puntos de daño más.",
				'it-it': "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 20 danni in più.",
				'pt-br': "Se este Pokémon possuir alguma Energia Darkness ligada a ele, este ataque causará 20 de danos adicionais.",
				'de-de': "Wenn an dieses Pokémon bereits mindestens 1 Darkness-Energie angelegt ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
	},

	thirdParty: {
		cardmarket: 284242,
		tcgplayer: 101483
	}
}

export default card
