import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
		'es-es': "Rayquaza",
		'pt-br': "Rayquaza",
		'de-de': "Rayquaza",
		'it-it': "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Jaw Lock",
			'fr-fr': "Croque Fort",
			'es-es': "Presa Maxilar",
			'pt-br': "Trava de Mandíbula",
			'de-de': "Fesselbiss",
			'it-it': "Morsostretto"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Power Blast",
			'fr-fr': "Violente Déflagration",
			'es-es': "Estallido Vigoroso",
			'pt-br': "Explosão Poderosa",
			'de-de': "Powerschuss",
			'it-it': "Forzacolpo"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta un'Energia da questo Pokémon."
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it."
	},

	stage: "Basic",
	dexId: [384],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 453313,
		tcgplayer: 214240
	}
}

export default card
