import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
		es: "Aegislash",
		it: "Aegislash",
		pt: "Aegislash",
		de: "Durengard"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		681,
	],

	hp: 150,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ticking Knock Out",
				fr: "K.O. Imminent",
				es: "Fuera de Combate Inminente",
				it: "KO a Orologeria",
				pt: "Contagem Regressiva",
				de: "Tickender K. o."
			},
			effect: {
				en: "During your next turn, if the Defending Pokémon is damaged by an attack, it will be Knocked Out.",
				fr: "Pendant votre prochain tour, si le Pokémon Défenseur subit les dégâts d’une attaque, il sera mis K.O.",
				es: "Durante tu próximo turno, si el Pokémon Defensor resulta dañado por un ataque, quedará Fuera de Combate.",
				it: "Durante il tuo prossimo turno, il Pokémon difensore viene messo KO se viene danneggiato da un attacco.",
				pt: "Durante a sua próxima vez de jogar, se o Pokémon Defensor for danificado por um ataque, ele será Nocauteado.",
				de: "Wenn das Verteidigende Pokémon während deines nächsten Zuges durch eine Attacke Schaden erhält, wird es kampfunfähig."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Draining Blade",
				fr: "Lame Siphon",
				es: "Cuchilla Drenaje",
				it: "Assorbilama",
				pt: "Lâmina Sugadora",
				de: "Zehrende Klinge"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355568
	}
}

export default card
