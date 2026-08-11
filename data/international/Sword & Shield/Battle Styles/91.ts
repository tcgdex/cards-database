import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Drastic Draw",
			'fr-fr': "Pioche Radicale",
			'es-es': "Robo Drástico",
			'it-it': "Pesca Drastica",
			'pt-br': "Compra Drástica",
			'de-de': "Drastischer Zug"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes robar 3 cartas.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare tre carte.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá comprar 3 cartas.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 3 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	regulationMark: "E",
	retreat: 0,


	stage: "Stage2",

	description: {
		'en-us': "It feeds on the blood of living people and Pokémon. If it can't drink any blood for even a short while, it becomes weak and unable to fly."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545546,
				tcgplayer: 234202
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545546,
				tcgplayer: 234202
			}
		},
	],
}

export default card
