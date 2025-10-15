import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [721],
	set: Set,

	name: {
		en: "Volcanion",
		fr: "Volcanion",
		es: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion",
		de: "Volcanion"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Dual Turbo",
			fr: "Turbo Duo",
			es: "Turbo Dual",
			it: "Doppia Turbina",
			pt: "Turbo Duplo",
			de: "Doppelturbo"
		},

		effect: {
			en: "Choose up to 2 of your Benched Pokémon and attach a Basic {R} Energy card from your discard pile to each of them.",
			fr: "Choisissez jusqu'à 2 de vos Pokémon de Banc, puis attachez une carte Énergie {R} de base de votre pile de défausse à chacun d'eux.",
			es: "Elige hasta 2 de tus Pokémon en Banca y une 1 carta de Energía {R} Básica de tu pila de descartes a cada uno de ellos.",
			it: "Scegli fino a due dei tuoi Pokémon in panchina e assegna a ognuno di essi una carta Energia base {R} dalla tua pila degli scarti.",
			pt: "Escolha até 2 dos seus Pokémon no Banco e ligue uma carta de Energia {R} Básica da sua pilha de descarte a cada um deles.",
			de: "Wähle bis zu 2 Pokémon auf deiner Bank und lege 1 Basis-{R}-Energiekarte aus deinem Ablagestapel an jedes von ihnen an."
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
			es: "Impacto Pesado",
			it: "Impatto Pesante",
			pt: "Impacto Pesado",
			de: "Schwerer Einschlag"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	],

	illustrator: "Nisota Niso",

	thirdParty: {
		cardmarket: 740498
	}
}

export default card
