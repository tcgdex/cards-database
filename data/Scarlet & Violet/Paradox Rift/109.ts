import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [1003],
	set: Set,

	name: {
		en: "Ting-Lu",
		fr: "Dinglu",
		es: "Ting-Lu",
		it: "Ting-Lu",
		pt: "Ting-Lu",
		de: "Dinglu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Sand Bringer",
			fr: "Porteur de Sable",
			es: "Portador de Arena",
			it: "Portasabbia",
			pt: "Emissário das Areias",
			de: "Sandbringer"
		},

		effect: {
			en: "Attach up to 2 Basic {F} Energy cards from your discard pile to 1 of your Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie {F} de base de votre pile de défausse à l'un de vos Pokémon.",
			es: "Une hasta 2 cartas de Energía {F} Básica de tu pila de descartes a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon fino a due carte Energia base {F} dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia {F} Básica da sua pilha de descarte a 1 dos seus Pokémon.",
			de: "Lege bis zu 2 Basis-{F}-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Arrogant Impact",
			fr: "Impact Arrogant",
			es: "Impacto Soberbia",
			it: "Impatto Arrogante",
			pt: "Impacto da Soberba",
			de: "Arroganter Einschlag"
		},

		effect: {
			en: "If this Pokémon has 4 or more damage counters on it, this attack does nothing.",
			fr: "Si ce Pokémon a au moins 4 marqueurs de dégâts, cette attaque ne fait rien.",
			es: "Si este Pokémon tiene 4 contadores de daño o más sobre él, este ataque no hace nada.",
			it: "Se questo Pokémon ha quattro o più segnalini danno, questo attacco non ha effetto.",
			pt: "Se este Pokémon tiver 4 ou mais contadores de dano nele, este ataque não fará nada.",
			de: "Wenn auf diesem Pokémon 4 oder mehr Schadensmarken liegen, hat diese Attacke keine Auswirkungen."
		},

		damage: 220
	}],

	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	],

	illustrator: "AKIRA EGAWA",

	thirdParty: {
		cardmarket: 740627
	}
}

export default card
