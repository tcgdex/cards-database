import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu",
		it: "Pikachu"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Tail Whip",
			fr: "Mimi-Queue",
			es: "Látigo",
			pt: "Cauda Chicote",
			de: "Rutenschlag",
			it: "Colpocoda"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			pt: "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Wirf 1 Münze. Bei Kopf kann sich das Verteidigende Pokémon während des nächsten Zuges deines Gegners nicht zurückziehen.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Pika Bolt",
			fr: "Pik'Éclair",
			es: "Rayo Pika",
			pt: "Relâmpagochu",
			de: "Pikaschuss",
			it: "Pikafulmine"
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
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	stage: "Basic",
	dexId: [25],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
