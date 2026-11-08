import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Bisharp",
		'fr-fr': "Scalproie",
		'es-es': "Bisharp",
		'it-it': "Bisharp",
		'pt-br': "Bisharp",
		'de-de': "Caesurio"
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
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Single Lunge",
				'fr-fr': "Allongement Simple",
				'es-es': "Embestida Única",
				'it-it': "Affondo Singolo",
				'pt-br': "Estocada Única",
				'de-de': "Einzelsprung"
			},
			effect: {
				'en-us': "If this Pokémon has no damage counters on it, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon n’a pas de marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon no tiene ningún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon non ha dei segnalini danno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon não tiver nenhum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon keine Schadensmarken liegen, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
				'en-us': "Power Edge",
				'fr-fr': "Lame Puissante",
				'es-es': "Filo Poderoso",
				'it-it': "Colpotente",
				'pt-br': "Gume Poderoso",
				'de-de': "Kraftklinge"
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

	description: {
		'en-us': "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
	},

	thirdParty: {
		cardmarket: 369034,
		tcgplayer: 183887
	}
}

export default card
