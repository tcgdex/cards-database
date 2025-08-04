import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
		es: "Tangrowth",
		it: "Tangrowth",
		pt: "Tangrowth",
		de: "Tangoloss"
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
		en: "Tangela",
		fr: "Saquedeneu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bind Down",
				fr: "Astreinte",
				es: "Amarrar",
				it: "Legafermo",
				pt: "Aprisionamento",
				de: "Anbinden"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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
				en: "Chlorowhip",
				fr: "Chlorofouet",
				es: "Clorolátigo",
				it: "Fustigacura",
				pt: "Chicote de Clorofila",
				de: "Chloropeitsche"
			},
			effect: {
				en: "If this Pokémon has at least 2 Grass Energy attached to it, heal 60 damage from this Pokémon.",
				fr: "Si au moins 2 Énergies Grass sont attachées à ce Pokémon, soignez-lui 60 dégâts.",
				es: "Si este Pokémon tiene por lo menos 2 Energías Grass unidas a él, cura 60 puntos de daño a este Pokémon.",
				it: "Se questo Pokémon ha almeno due Energie Grass assegnate, curalo da 60 danni.",
				pt: "Se este Pokémon tiver pelo menos 2 Energias Grass ligadas a ele, cure 60 pontos de dano dele.",
				de: "Wenn an dieses Pokémon mindestens 2 Grass-Energien angelegt sind, heile 60 Schadenspunkte bei diesem Pokémon."
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

	thirdParty: {
		cardmarket: 372310,
		tcgplayer: 189059
	}
}

export default card
