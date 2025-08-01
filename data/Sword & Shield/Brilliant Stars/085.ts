import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [89],
	set: Set,

	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
		es: "Grimer",
		it: "Grimer",
		pt: "Grimer",
		de: "Sleima"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sludge Street",
			fr: "Passage Dégueu",
			es: "Calle Lodo",
			it: "Strada di Melma",
			pt: "Lodo na Rua",
			de: "Schlammstraße"
		},

		effect: {
			en: "The Retreat Cost of your opponent's Poisoned Pokémon is Colorless more.",
			fr: "Le Coût de Retraite des Pokémon Empoisonnés de votre adversaire augmente de Colorless.",
			es: "El Coste de Retirada de los Pokémon Envenenados de tu rival es de Colorless más.",
			it: "Il costo di ritirata dei Pokémon avvelenati del tuo avversario aumenta di Colorless.",
			pt: "O custo de Recuo dos Pokémon Envenenados do seu oponente é Colorless a mais.",
			de: "Die Rückzugskosten der vergifteten Pokémon deines Gegners erhöhen sich um Colorless."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Shrieking Poison",
			fr: "Poison Hurleur",
			es: "Veneno Chillón",
			it: "Velenostrido",
			pt: "Veneno Gritante",
			de: "Kreischendes Gift"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
		},

		damage: 90
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608535
	}
}

export default card