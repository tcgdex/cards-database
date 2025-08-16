import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [567],
	set: Set,

	name: {
		en: "Archeops",
		fr: "Aéroptéryx",
		de: "Aeropteryx",
		it: "Archeops",
		pt: "Archeops",
		es: "Archeops",
		'es-mx': "Archeops"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ancient Wing",
			fr: "Aile Antique",
			de: "Antik-Flügel",
			it: "Ala Antica",
			pt: "Asa Ancestral",
			es: "Ala del Pasado",
			'es-mx': "Ala Antigua"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may devolve 1 of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez faire dés-évoluer l'un des Pokémon évolués de votre adversaire en plaçant dans la main de votre adversaire la carte Évolution la plus élevée placée sur celui-ci.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du 1 entwickeltes Pokémon deines Gegners rückentwickeln, indem du deinem Gegner die daraufliegende Karte mit der höchsten Entwicklungsphase auf die Hand gibst.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi annullare l'evoluzione di uno dei Pokémon evoluti del tuo avversario prendendo la carta Evoluzione di fase più alta presente su di esso e aggiungendola alle carte nella mano del tuo avversario.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá reverter a evolução de 1 dos Pokémon evoluídos do seu oponente colocando a carta de Evolução de Estágio mais alto sobre ele na mão do seu oponente.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer involucionar a 1 de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de fase más alta que tenga sobre él en la mano de tu rival.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes hacer involucionar a 1 de los Pokémon evolucionados de tu rival poniendo la carta de Evolución de Fase más alta que esté sobre él en la mano de tu rival."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Rock Throw",
			fr: "Jet-Pierres",
			de: "Steinwurf",
			it: "Sassata",
			pt: "Lançamento de Rocha",
			es: "Lanzarrocas",
			'es-mx': "Lanzarrocas"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835995
	}
}

export default card