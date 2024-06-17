import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [291],
	name: {
		en: "Ninjask",
		fr: "Ninjask",
		es: "Ninjask",
		it: "Ninjask",
		pt: "Ninjask",
		de: "Ninjask"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
		es: "Nincada",
		it: "Nincada",
		pt: "Nincada",
		de: "Nincada"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cast-Off Shell",
				fr: "Coquille Libérante",
				es: "Caparazón Desprendido",
				it: "Scartaguscio",
				pt: "Concha Descartada",
				de: "Panzer abwerfen"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for a Shedinja and put it onto your Bench. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck un Munja, puis le placer sur votre Banc. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes buscar en tu baraja a Shedinja y ponerlo en tu Banca. Baraja las cartas de tu baraja después.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi cercare nel tuo mazzo uno Shedinja e aggiungerlo alla tua panchina. Poi rimischia le carte del tuo mazzo.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode procurar Shedinja em seu baralho e colocá-lo no Banco. Em seguida, embaralhe seus cards.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du dein Deck nach Ninjatom durchsuchen und es auf deine Bank legen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Absorb",
				fr: "Vole-Vie",
				es: "Absorber",
				it: "Assorbimento",
				pt: "Absorção",
				de: "Absorber"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Its cry leaves a lasting headache if heard for too long. It moves so quickly that it is almost invisible."
	}
}

export default card
