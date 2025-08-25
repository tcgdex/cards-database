import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Shelgon",
		fr: "Drackhaus",
		es: "Shelgon",
		it: "Shelgon",
		pt: "Shelgon",
		de: "Draschel"
	},

	illustrator: "Asako Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],

	hp: 90,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Bagon",
		fr: "Draby",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
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
				en: "If this Pokémon has any damage counters on it, this attack does 50 more damage.",
				fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 50 danni in più.",
				pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "30+",

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
		cardmarket: 361346,
		tcgplayer: 170932
	}
}

export default card
