import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brambleghast",
		'fr-fr': "Virevorreur",
		'es-es': "Brambleghast",
		'es-mx': "Brambleghast",
		'de-de': "Horrerba",
		'it-it': "Brambleghast",
		'pt-br': "Brambleghast"
	},

	evolveFrom: {
		'en-us': "Bramblin",
		'fr-fr': "Virovent",
		'es-es': "Bramblin",
		'es-mx': "Bramblin",
		'de-de': "Weherba",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [947],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Prison Panic",
			'fr-fr': "Prison Panique",
			'es-es': "Preso del Pánico",
			'es-mx': "Prisión de Pánico",
			'de-de': "Knastpanik",
			'it-it': "Prigionpanico",
			'pt-br': "Pânico no Xilindró"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Make your opponent's Active Pokémon Confused.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Rendez le Pokémon Actif de votre adversaire Confus.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Deja al Pokémon Activo de tu rival Confundido.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Deja Confundido al Pokémon Activo de tu rival.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Verwirre das Aktive Pokémon deines Gegners.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Lascia il Pokémon attivo del tuo avversario confuso.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Deixe o Pokémon Ativo do seu oponente Confuso."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'es-mx': "Esfera Psíquica",
			'de-de': "Psychosphäre",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It will open the branches of its head to envelop its prey. Once it absorbs all the life energy it needs, it expels the prey and discards it.",
	},

	illustrator: "Tetsu Kayama",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857622,
				tcgplayer: 662135,
				cardtrader: 356830
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857622,
				tcgplayer: 662135,
				cardtrader: 356830
			}
		},
	],
}

export default card
