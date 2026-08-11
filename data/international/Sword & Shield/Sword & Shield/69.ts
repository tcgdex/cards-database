import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Lanturn",
		'fr-fr': "Lanturn",
		'es-es': "Lanturn",
		'it-it': "Lanturn",
		'pt-br': "Lanturn",
		'de-de': "Lanturn"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strobe Shock",
				'fr-fr': "Strobochoc",
				'es-es': "Sacudida Estroboscópica",
				'it-it': "Stroboshock",
				'pt-br': "Choque Estroboscópico",
				'de-de': "Blitzschock"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. If you find any Energy cards there, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Tu rival enseña las cartas de su mano. Si encuentras alguna carta de Energía entre ellas, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Se ci trovi delle carte Energia, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Seu oponente revela a própria mão. Se você encontrar alguma carta de Energia lá, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Wenn du dort mindestens 1 Energiekarte findest, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack."
	},

	dexId: [171],

	thirdParty: {
		cardmarket: 436479,
		tcgplayer: 208368
	}
}

export default card
