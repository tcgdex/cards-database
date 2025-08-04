import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Wingull",
		fr: "Goélise",
		es: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		de: "Wingull"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		278,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Roost",
				fr: "Atterrissage",
				es: "Respiro",
				it: "Trespolo",
				pt: "Poleiro",
				de: "Ruheort"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. It can’t retreat during your next turn.",
				fr: "Soignez 30 dégâts à ce Pokémon. Il ne peut pas battre en retraite pendant votre prochain tour.",
				es: "Cura 30 puntos de daño a este Pokémon. No puede retirarse durante tu próximo turno.",
				it: "Cura questo Pokémon da 30 danni. Non può ritirarsi durante il tuo prossimo turno.",
				pt: "Cure 30 pontos de dano deste Pokémon. Este Pokémon não poderá recuar durante a sua próxima vez de jogar.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Es kann sich während deines nächsten Zuges nicht zurückziehen."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 295347,
		tcgplayer: 126908
	}
}

export default card
