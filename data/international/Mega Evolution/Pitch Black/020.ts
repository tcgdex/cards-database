import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primarina",
		'fr-fr': "Oratoria",
		'es-es': "Primarina",
		'es-mx': "Primarina",
		'de-de': "Primarene",
		'it-it': "Primarina",
		'pt-br': "Primarina"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [730],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Brionne"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Enriching Melody",
			'fr-fr': "Mélodie Fortifiante",
			'es-es': "Melodía Restauradora",
			'es-mx': "Melodía Restauradora",
			'de-de': "Bereichernde Melodie",
			'it-it': "Melodia Benefica",
			'pt-br': "Musicoterapia"
		},

		effect: {
			'en-us': "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Heal all damage from 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez utiliser ce talent. Soignez tous les dégâts de l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon, puedes usar esta habilidad. Cura todos los puntos de daño a uno de tus Pokémon.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes usar esta Habilidad. Cura todos los puntos de daño a 1 de tus Pokémon.",
			'de-de': "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du diese Fähigkeit einsetzen. Heile allen Schaden bei 1 deiner Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi usare questa abilità. Cura uno dei tuoi Pokémon da tutti i danni.",
			'pt-br': "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você poderá usar esta Habilidade. Cure todo o dano de 1 dos seus Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Aqua Return",
			'fr-fr': "Retour Aquatique",
			'es-es': "Retorno Acuático",
			'es-mx': "Retorno Acuático",
			'de-de': "Aquarückkehr",
			'it-it': "Idroritorno",
			'pt-br': "Retorno Aquático"
		},

		cost: ["Water", "Colorless"],

		damage: 120,

		effect: {
			'en-us': "Shuffle this Pokémon and all attached cards into your deck.",
			'fr-fr': "Mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.",
			'es-es': "Pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
			'es-mx': "Baraja este Pokémon y todas las cartas unidas a él en tu mazo.",
			'de-de': "Mische dieses Pokémon und alle angelegten Karten in dein Deck.",
			'it-it': "Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
			'pt-br': "Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho."
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
				cardmarket: 895808,
				tcgplayer: 704777
			}
		},
	],
}

export default card
