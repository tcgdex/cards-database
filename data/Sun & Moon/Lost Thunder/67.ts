import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Primarina",
		fr: "Oratoria",
		es: "Primarina",
		it: "Primarina",
		pt: "Primarina",
		de: "Primarene"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		730,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Harmonics",
				fr: "Harmoniques",
				es: "Armonía",
				it: "Scala Armonica",
				pt: "Harmônica",
				de: "Harmonik"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to 1 of your Pokémon, except with an attack, Ability, or Trainer card, attach up to 2 Energy cards to that Pokémon instead of 1.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, excepté en raison d’une attaque, d’un talent ou d’une carte Dresseur, attachez jusqu’à 2 cartes Énergie à ce Pokémon-là au lieu d’une.",
				es: "Cada vez que unas 1 carta de Energía de tu mano a 1 de tus Pokémon, excepto con un ataque, habilidad o carta de Entrenador, une hasta 2 cartas de Energía a ese Pokémon en vez de 1.",
				it: "Ogni volta che assegni a uno dei tuoi Pokémon una carta Energia dalla tua mano, a meno che non sia in conseguenza di un attacco, un’abilità o una carta Allenatore, assegna fino a due carte Energia a quel Pokémon invece di una.",
				pt: "Sempre que ligar 1 carta de Energia da sua mão a 1 dos seus Pokémon, exceto se ligá-la por um ataque, Habilidade ou carta de Treinador, ligue até 2 cartas de Energia àquele Pokémon ao invés de 1.",
				de: "Jedes Mal, wenn du 1 Energiekarte aus deiner Hand an 1 deiner Pokémon anlegst, außer mit einer Attacke, Fähigkeit oder Trainerkarte, lege bis zu 2 Energiekarten anstelle von 1 Energiekarte an jenes Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Splash",
				fr: "Hypnoplouf",
				es: "Salpicadura Hipnótica",
				it: "Ipnospruzzo",
				pt: "Explosão Hipnótica",
				de: "Hypnospritzer"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365705,
		tcgplayer: 178876
	}
}

export default card
