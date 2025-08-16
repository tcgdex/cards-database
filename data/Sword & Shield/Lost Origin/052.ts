import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Pika Dash",
			fr: "Pika Ruée",
			es: "Pika Carrera",
			it: "Pikascatto",
			pt: "Arremetida Pikachu",
			de: "Pikaspurt"
		},

		effect: {
			en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
			fr: "Si de l'Énergie est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			es: "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
			it: "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
			pt: "Se este Pokémon tiver alguma Energia ligada a ele, não terá custo de Recuo.",
			de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Whimsy Tackle",
			fr: "Charge Bizarre",
			es: "Placaje Caprichoso",
			it: "Capriccioazione",
			pt: "Investida Fantástica",
			de: "Launischer Tackle"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674062,
		tcgplayer: 283926
	}
}

export default card