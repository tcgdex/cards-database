import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 140,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Toppling Wind",
				'fr-fr': "Mistral",
				'es-es': "Viento Norte",
				'it-it': "Granfolata",
				'pt-br': "Vento Ascendente",
				'de-de': "Windkipper"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards of your opponent’s deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar las 3 primeras cartas de la baraja de tu rival.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare le tre carte in cima al mazzo del tuo avversario.",
				'pt-br': "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar os 3 cards de cima do baralho do seu oponente.",
				'de-de': "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Giga Horn",
				'fr-fr': "Giga Corne",
			},
			effect: {
				'en-us': "Flip 2 coins. If both of them are tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns.",
	},

	thirdParty: {
		cardmarket: 280519,
		tcgplayer: 83481
	}
}

export default card
