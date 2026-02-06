import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [583],

	name: {
		en: "N's Vanillish",
		fr: "Sorboul de N",
		es: "Vanillish de N",
		'es-mx': "Vanillish de N",
		de: "Ns Gelatroppo",
		it: "Vanillish di N",
		pt: "Vanillish do N"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Flop",
			fr: "Flop",
			es: "Vuelta",
			'es-mx': "Desplome",
			de: "Plumps",
			it: "Tonfo",
			pt: "Baque"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Sheer Cold",
			fr: "Glaciation",
			es: "Frío Polar",
			'es-mx': "Frío Extremo",
			de: "Eiseskälte",
			it: "Purogelo",
			pt: "Frio Extremo"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675862,
		cardmarket: 869661
	}
}

export default card