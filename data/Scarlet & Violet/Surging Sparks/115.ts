import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [970],
	set: Set,

	name: {
		en: "Glimmora",
		fr: "Floréclat",
		es: "Glimmora",
		it: "Glimmora",
		pt: "Glimmora",
		de: "Lumiflora"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		en: "Glimmet",
		fr: "Germéclat",
		es: "Glimmet",
		it: "Glimmet",
		pt: "Glimmet",
		de: "Lumispross"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Corrosive Shards",
			fr: "Éclats Corrosifs",
			es: "Esquirlas Corrosivas",
			it: "Schegge Corrosive",
			pt: "Estilhaços Corrosivos",
			de: "Korrosionssplitter"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, Energy cards can't be attached from your opponent's hand to that Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, aucune carte Énergie ne peut être attachée de la main de votre adversaire à ce Pokémon-là.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, no se pueden unir cartas de Energía de la mano de tu rival a ese Pokémon.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, nessuna carta Energia può essere assegnata dalla mano del tuo avversario a quel Pokémon.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Durante o próximo turno do seu oponente, cartas de Energia não poderão ser ligadas da mão do seu oponente àquele Pokémon.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners können keine Energiekarten aus der Hand deines Gegners an jenes Pokémon angelegt werden."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			es: "Lanzarrocas",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			de: "Steinwurf"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "takashi shiraishi",

	thirdParty: {
		cardmarket: 794452
	}
}

export default card
