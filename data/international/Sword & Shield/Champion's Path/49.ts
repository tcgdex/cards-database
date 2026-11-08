import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [334],

	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "Taira Akitsu",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Miraculous Charm",
				'fr-fr': "Amulette Miraculeuse",
				'es-es': "Amuleto Milagroso",
				'it-it': "Amuleto Miracoloso",
				'pt-br': "Pingente Milagroso",
				'de-de': "Wunderamulett"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon V and Pokémon-GX.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par les attaques des Pokémon-V et Pokémon-GX de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon V y Pokémon-GX de tu rival.",
				'it-it': "Previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon-V e dei Pokémon-GX del tuo avversario.",
				'pt-br': "Previna todo o dano causado a este Pokémon por ataques dos Pokémon V e Pokémon-GX do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon-V und Pokémon-GX deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
			},

			damage: 60,

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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano."
	},

	thirdParty: {
		cardmarket: 500100,
		tcgplayer: 223049
	}
}

export default card
