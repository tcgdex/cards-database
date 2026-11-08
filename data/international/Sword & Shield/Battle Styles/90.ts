import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Discreet Draw",
			'fr-fr': "Pioche Discrète",
			'es-es': "Robo Discreto",
			'it-it': "Pesca Discreta",
			'pt-br': "Compra Discreta",
			'de-de': "Diskreter Zug"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 2 cards.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez piocher 2 cartes.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes robar 2 cartas.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi pescare due carte.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá comprar 2 cartas.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar",
			'de-de': "Luftschnitt"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "They can suck down over 10 ounces of blood in one go. They have been known to drink so much blood that they can no longer fly."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545541,
				tcgplayer: 234201
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545541,
				tcgplayer: 234201
			}
		},
	],
}

export default card
