import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu",
		'it-it': "Pikachu"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Tail Whip",
			'fr-fr': "Mimi-Queue",
			'es-es': "Látigo",
			'pt-br': "Cauda Chicote",
			'de-de': "Rutenschlag",
			'it-it': "Colpocoda"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			'de-de': "Wirf 1 Münze. Bei Kopf kann sich das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht zurückziehen.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Pika Bolt",
			'fr-fr': "Pik'Éclair",
			'es-es': "Rayo Pika",
			'pt-br': "Relâmpagochu",
			'de-de': "Pikaschuss",
			'it-it': "Pikafulmine"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 461594
	}
}

export default card
