import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [873],
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth",
		de: "Mottineva"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		it: "Snom",
		pt: "Snom",
		de: "Snomnom"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Freezing Chill",
			fr: "Frisson Glaçant",
			es: "Frío Helador",
			it: "Freddo Glaciale",
			pt: "Frio de Arrepiar",
			de: "Gefrierschock"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "rika",

	thirdParty: {
		cardmarket: 760676
	}
}

export default card