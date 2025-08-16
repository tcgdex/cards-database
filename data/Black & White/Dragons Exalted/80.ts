import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		es: "Aggron",
		it: "Aggron",
		pt: "Aggron",
		de: "Stolloss"
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
		en: "Lairon",
		fr: "Galegon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toppling Wind",
				fr: "Mistral",
				es: "Viento Norte",
				it: "Granfolata",
				pt: "Vento Ascendente",
				de: "Windkipper"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards of your opponent’s deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar las 3 primeras cartas de la baraja de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare le tre carte in cima al mazzo del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar os 3 cards de cima do baralho do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel legen."
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
				en: "Giga Horn",
				fr: "Giga Corne",
			},
			effect: {
				en: "Flip 2 coins. If both of them are tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
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

	thirdParty: {
		cardmarket: 280519,
		tcgplayer: 83481
	}
}

export default card
