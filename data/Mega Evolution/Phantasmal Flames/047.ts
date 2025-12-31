import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Brambleghast",
		fr: "Virevorreur",
		es: "Brambleghast",
		'es-mx': "Brambleghast",
		de: "Horrerba",
		it: "Brambleghast",
		pt: "Brambleghast"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [947],

	abilities: [{
		type: "Ability",

		name: {
			en: "Prison Panic",
			fr: "Prison Panique",
			es: "Preso del Pánico",
			'es-mx': "Prisión de Pánico",
			de: "Knastpanik",
			it: "Prigionpanico",
			pt: "Pânico no Xilindró"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Make your opponent's Active Pokémon Confused.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Rendez le Pokémon Actif de votre adversaire Confus.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Deja al Pokémon Activo de tu rival Confundido.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Deja Confundido al Pokémon Activo de tu rival.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Verwirre das Aktive Pokémon deines Gegners.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Lascia il Pokémon attivo del tuo avversario confuso.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Deixe o Pokémon Ativo do seu oponente Confuso."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			'es-mx': "Esfera Psíquica",
			de: "Psychosphäre",
			it: "Psicosfera",
			pt: "Esfera Psíquica"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857622
	}
}

export default card