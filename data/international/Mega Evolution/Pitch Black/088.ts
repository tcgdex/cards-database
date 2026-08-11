import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Primarina",
		fr: "Oratoria",
		es: "Primarina",
		'es-mx': "Primarina",
		de: "Primarene",
		it: "Primarina",
		pt: "Primarina"
	},

	illustrator: "satoma",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [730],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Enriching Melody",
			fr: "Mélodie Fortifiante",
			es: "Melodía Restauradora",
			'es-mx': "Melodía Restauradora",
			de: "Bereichernde Melodie",
			it: "Melodia Benefica",
			pt: "Musicoterapia"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Heal all damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Soignez tous les dégâts de l'un de vos Pokémon.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Cura todos los puntos de daño a uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Cura todos los puntos de daño a 1 de tus Pokémon.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Heile allen Schaden bei 1 deiner Pokémon.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Cura uno dei tuoi Pokémon da tutti i danni.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Cure todo o dano de 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Return",
			fr: "Retour Aquatique",
			es: "Retorno Acuático",
			'es-mx': "Retorno Acuático",
			de: "Aquarückkehr",
			it: "Idroritorno",
			pt: "Retorno Aquático"
		},

		cost: ["Water", "Colorless"],

		damage: 120,

		effect: {
			en: "Shuffle this Pokémon and all attached cards into your deck.",
			fr: "Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			es: "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'es-mx': "Baraja este Pokémon y todas las cartas unidas a él en tu mazo.",
			de: "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			it: "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			pt: "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895872,
				tcgplayer: 704845
			}
		},
	],
}

export default card
