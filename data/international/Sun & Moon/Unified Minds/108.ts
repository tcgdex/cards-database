import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'es-es': "Breloom",
		'it-it': "Breloom",
		'pt-br': "Breloom",
		'de-de': "Kapilz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'es-es': "Espora",
				'it-it': "Spora",
				'pt-br': "Esporos",
				'de-de': "Pilzspore"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Pre-Dawn Strike",
				'fr-fr': "Frappe Matinale",
				'es-es': "Golpe al Amanecer",
				'it-it': "Colpo Mattiniero",
				'pt-br': "Golpe de Ninar",
				'de-de': "Angriff im Morgengrauen"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is Asleep, this attack does 90 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 90 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 90 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners schläft, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its short arms stretch when it throws punches. Its technique is equal to that of pro boxers.",
	},

	thirdParty: {
		cardmarket: 388342,
		tcgplayer: 195061
	}
}

export default card
