import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza",
		fr: "Rayquaza",
		es: "Rayquaza",
		pt: "Rayquaza",
		de: "Rayquaza",
		it: "Rayquaza"
	},

	illustrator: "so-taro",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Jaw Lock",
			fr: "Croque Fort",
			es: "Presa Maxilar",
			pt: "Trava de Mandíbula",
			de: "Fesselbiss",
			it: "Morsostretto"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
			es: "Estallido Vigoroso",
			pt: "Explosão Poderosa",
			de: "Powerschuss",
			it: "Forzacolpo"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
			es: "Descarta 1 Energía de este Pokémon.",
			pt: "Descarte 1 Energia deste Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta un'Energia da questo Pokémon."
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
		en: "It flies in the ozone layer, way up high in the sky. Until recently, no one had ever seen it."
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
		cardmarket: 453313
	}
}

export default card
