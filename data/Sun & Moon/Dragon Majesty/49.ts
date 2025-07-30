import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
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
				en: "Rumble",
				fr: "Bagarre",
				es: "Retumbar",
				it: "Rombo",
				pt: "Estrondo",
				de: "Grollen"
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
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
				en: "Raging Blade",
				fr: "Lame en Furie",
				es: "Tajo Furioso",
				it: "Lama Furente",
				pt: "Lâmina Devastadora",
				de: "Wutklinge"
			},
			effect: {
				en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 363520,
		tcgplayer: 175479
	}
}

export default card
