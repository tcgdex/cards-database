import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		en: "Scrafty",
		fr: "Baggaïd",
		de: "Irokex",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty"
	},

	illustrator: "OKUBO",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
		de: "Zurrokex",
		it: "Scraggy",
		pt: "Scraggy",
		es: "Scraggy",
		'es-mx': "Scraggy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Nab 'n' Dash",
			fr: "Vol et Ruée",
			de: "Schnappen und Sprinten",
			es: "Birlar y Pirarse",
			it: "Arraffa e Scappa",
			pt: "Pegar e Vazar"
		},

		effect: {
			en: "Search your deck for a number of cards up to the number of your Benched Pokémon and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un nombre de cartes inférieur ou égal au nombre de Pokémon sur votre Banc, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu so vielen Karten, wie du Pokémon auf deiner Bank hast, und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			es: "Busca en tu baraja una cantidad de cartas igual o inferior al número de Pokémon que tengas en Banca y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo un numero di carte uguale o inferiore al numero di Pokémon nella tua panchina e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por um número de cartas no seu baralho até o número dos seus Pokémon no Banco e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
			de: "Turmkick",
			es: "Patada Salto Alta",
			it: "Calcinvolo",
			pt: "Chute de Pulo Alto"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card