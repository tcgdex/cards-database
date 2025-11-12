import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Ninjask",
		fr: "Ninjask",
		de: "Ninjask",
		it: "Ninjask",
		es: "Ninjask",
		pt: "Ninjask",
		'es-mx': "Ninjask"
	},

	illustrator: "Apios",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
		de: "Nincada",
		it: "Nincada",
		es: "Nincada",
		pt: "Nincada",
		'es-mx': "Nincada"
	},
	stage: "Stage1",
	dexId: [291],

	abilities: [{
		type: "Ability",

		name: {
			en: "Cast-Off Shell",
			fr: "Coquille Libérante",
			de: "Panzer abwerfen",
			it: "Scartaguscio",
			es: "Caparazón Desprendido",
			pt: "Concha Descartada",
			'es-mx': "Caparazón Desprendido"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Search your deck for a Shedinja and put it onto your Bench. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Cherchez dans votre deck un Munja, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Ninjatom und lege es auf deine Bank. Mische anschließend dein Deck.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Cerca nel tuo mazzo uno Shedinja e mettilo nella tua panchina. Poi rimischia il tuo mazzo.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Busca en tu baraja 1 Shedinja y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Procure por um Shedinja no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Busca en tu mazo 1 Shedinja y ponlo en tu Banca. Después, baraja tu mazo."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "U-turn",
			fr: "Demi-Tour",
			de: "Kehrtwende",
			it: "Retromarcia",
			es: "Ida y Vuelta",
			pt: "Fazer Retorno",
			'es-mx': "Ida y Vuelta"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
			'es-mx': "Cambia este Pokémon por 1 de tus Pokémon en Banca."
		},

		damage: 90
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654356,
		cardmarket: 851088
	}
}

export default card