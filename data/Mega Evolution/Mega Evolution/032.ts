import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		fr: "Démanta",
		de: "Mantax",
		it: "Mantine",
		es: "Mantine",
		pt: "Mantine",
		'es-mx': "Mantine"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	dexId: [226],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Call for Family",
			fr: "Appel à la Famille",
			de: "Familienruf",
			it: "Cerca Famiglia",
			es: "Llamar a la Familia",
			pt: "Chamar a Família",
			'es-mx': "Llamar a la Familia"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia il tuo mazzo.",
			es: "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Procure por até 2 Pokémon Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Busca en tu mazo hasta 2 Pokémon Básicos y ponlos en tu Banca. Después, baraja tu mazo."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade",
			it: "Cascata",
			es: "Cascada",
			pt: "Cachoeira",
			'es-mx': "Cascada"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654371,
		cardmarket: 851103
	}
}

export default card