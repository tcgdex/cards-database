import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'es-es': "Regirock",
		'it-it': "Regirock",
		'pt-br': "Regirock",
		'de-de': "Regirock"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Unyielding Rock",
				'fr-fr': "Roc Indestructible",
				'es-es': "Roca Inquebrantable",
				'it-it': "Saldaroccia",
				'pt-br': "Rocha Obstinada",
				'de-de': "Fels in der Brandung"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The same rocks that form its body have been found in ground layers around the world.",
	},

	thirdParty: {
		cardmarket: 284221,
		tcgplayer: 101462
	}
}

export default card
