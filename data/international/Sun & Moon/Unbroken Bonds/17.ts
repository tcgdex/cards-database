import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'es-es': "Tangrowth",
		'it-it': "Tangrowth",
		'pt-br': "Tangrowth",
		'de-de': "Tangoloss"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bind Down",
				'fr-fr': "Astreinte",
				'es-es': "Amarrar",
				'it-it': "Legafermo",
				'pt-br': "Aprisionamento",
				'de-de': "Anbinden"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chlorowhip",
				'fr-fr': "Chlorofouet",
				'es-es': "Clorolátigo",
				'it-it': "Fustigacura",
				'pt-br': "Chicote de Clorofila",
				'de-de': "Chloropeitsche"
			},
			effect: {
				'en-us': "If this Pokémon has at least 2 Grass Energy attached to it, heal 60 damage from this Pokémon.",
				'fr-fr': "Si au moins 2 Énergies Grass sont attachées à ce Pokémon, soignez-lui 60 dégâts.",
				'es-es': "Si este Pokémon tiene por lo menos 2 Energías Grass unidas a él, cura 60 puntos de daño a este Pokémon.",
				'it-it': "Se questo Pokémon ha almeno due Energie Grass assegnate, curalo da 60 danni.",
				'pt-br': "Se este Pokémon tiver pelo menos 2 Energias Grass ligadas a ele, cure 60 pontos de dano dele.",
				'de-de': "Wenn an dieses Pokémon mindestens 2 Grass-Energien angelegt sind, heile 60 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It ensnares prey by extending arms made of vines. Losing arms to predators does not trouble it.",
	},

	thirdParty: {
		cardmarket: 372310,
		tcgplayer: 189059
	}
}

export default card
