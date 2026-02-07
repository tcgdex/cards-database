import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Silcoon",
		fr: "Armulys",
		es: "Silcoon",
		'es-mx': "Silcoon",
		de: "Schaloko",
		it: "Silcoon",
		pt: "Silcoon"
	},

	illustrator: "Eri Yamaki",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Multiplying Cocoon",
			fr: "Multiplication de Cocons",
			es: "Capullo Multiplicador",
			'es-mx': "Capullo Multiplicador",
			de: "Mehrender Kokon",
			it: "Moltiplicazione di Bozzoli",
			pt: "Casulo Proliferante"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Search your deck for a Silcoon or a Cascoon and put it onto your Bench. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Cherchez dans votre deck un Armulys ou un Blindalys, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Busca en tu baraja 1 Silcoon o 1 Cascoon y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Busca en tu mazo 1 Silcoon o 1 Cascoon y ponlo en tu Banca. Después, baraja tu mazo.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Schaloko oder 1 Panekon und lege es auf deine Bank. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Cerca nel tuo mazzo un Silcoon o un Cascoon e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Procure por um Silcoon ou um Cascoon no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			'es-mx': "Tacleada",
			de: "Tackle",
			it: "Azione",
			pt: "Investida"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675824,
		cardmarket: 869623
	}
}

export default card