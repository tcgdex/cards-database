import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		625,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Single Lunge",
				fr: "Allongement Simple",
				es: "Embestida Única",
				it: "Affondo Singolo",
				pt: "Estocada Única",
				de: "Einzelsprung"
			},
			effect: {
				en: "If this Pokémon has no damage counters on it, this attack does 90 more damage.",
				fr: "Si ce Pokémon n’a pas de marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
				it: "Se questo Pokémon non ha dei segnalini danno, questo attacco infligge 90 danni in più.",
				pt: "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Edge",
				fr: "Lame Puissante",
				es: "Filo Poderoso",
				it: "Colpotente",
				pt: "Gume Poderoso",
				de: "Kraftklinge"
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

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 369034,
		tcgplayer: 183887
	}
}

export default card
