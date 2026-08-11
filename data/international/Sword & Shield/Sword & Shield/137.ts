import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Copperajah",
		'fr-fr': "Pachyradjah",
		'es-es': "Copperajah",
		'it-it': "Copperajah",
		'pt-br': "Copperajah",
		'de-de': "Patinaraja"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Cufant",
		'fr-fr': "Charibari",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Dig Drain",
				'fr-fr': "Trou Épuisant",
				'es-es': "Drenaje Excavador",
				'it-it': "Drenaggio",
				'pt-br': "Dreno Escavado",
				'de-de': "Umgraben"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 pontos de dano deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
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
				'en-us': "Muscular Nose",
				'fr-fr': "Nez Musclé",
				'es-es': "Trompa Muscular",
				'it-it': "Naso Muscoloso",
				'pt-br': "Nariz Musculoso",
				'de-de': "Muskelnase"
			},
			effect: {
				'en-us': "If this Pokémon has 8 or more damage counters on it, this attack does nothing.",
				'fr-fr': "Si ce Pokémon a au moins 8 marqueurs de dégâts, cette attaque ne fait rien.",
				'es-es': "Si este Pokémon tiene 8 contadores de daño o más sobre él, este ataque no hace nada.",
				'it-it': "Se questo Pokémon ha otto o più segnalini danno, questo attacco non ha effetto.",
				'pt-br': "Se este Pokémon tiver 8 ou mais contadores de dano nele, este ataque não fará nada.",
				'de-de': "Wenn auf diesem Pokémon 8 oder mehr Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
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
		'en-us': "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder."
	},

	dexId: [879],

	thirdParty: {
		cardmarket: 436794,
		tcgplayer: 208448
	}
}

export default card
