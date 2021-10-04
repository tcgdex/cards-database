import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Copperajah",
		fr: "Pachyradjah",
		es: "Copperajah",
		it: "Copperajah",
		pt: "Copperajah",
		de: "Patinaraja"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Dig Drain",
				fr: "Trou Épuisant",
				es: "Drenaje Excavador",
				it: "Drenaggio",
				pt: "Dreno Escavado",
				de: "Umgraben"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Muscular Nose",
				fr: "Nez Musclé",
				es: "Trompa Muscular",
				it: "Naso Muscoloso",
				pt: "Nariz Musculoso",
				de: "Muskelnase"
			},
			effect: {
				en: "If this Pokémon has 8 or more damage counters on it, this attack does nothing.",
				fr: "Si ce Pokémon a au moins 8 marqueurs de dégâts, cette attaque ne fait rien.",
				es: "Si este Pokémon tiene 8 contadores de daño o más sobre él, este ataque no hace nada.",
				it: "Se questo Pokémon ha otto o più segnalini danno, questo attacco non ha effetto.",
				pt: "Se este Pokémon tiver 8 ou mais contadores de dano nele, este ataque não fará nada.",
				de: "Wenn auf diesem Pokémon 8 oder mehr Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		en: "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
	}
}

export default card
