import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Zygarde",
		'fr-fr': "Zygarde",
		'es-es': "Zygarde",
		'it-it': "Zygarde",
		'pt-br': "Zygarde",
		'de-de': "Zygarde"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		718,
	],

	hp: 130,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rumble",
				'fr-fr': "Bagarre",
				'es-es': "Retumbar",
				'it-it': "Rombo",
				'pt-br': "Estrondo",
				'de-de': "Grollen"
			},
			effect: {
				'en-us': "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Blade",
				'fr-fr': "Lame en Furie",
				'es-es': "Tajo Furioso",
				'it-it': "Lama Furente",
				'pt-br': "Lâmina Devastadora",
				'de-de': "Wutklinge"
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It's thought to be monitoring the ecosystem. There are rumors that even greater power lies hidden within it.",
	},

	thirdParty: {
		cardmarket: 363520,
		tcgplayer: 175479
	}
}

export default card
