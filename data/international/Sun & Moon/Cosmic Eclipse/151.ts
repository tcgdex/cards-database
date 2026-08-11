import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		670,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Flower Picking",
				'fr-fr': "Cueillette de Fleurs",
				'es-es': "Recogida de Flores",
				'it-it': "Raccolta di Fiori",
				'pt-br': "Colhendo Flores",
				'de-de': "Blumenpflücken"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez choisir 2 cartes au hasard dans la main de votre adversaire. Votre adversaire montre ces cartes et les mélange avec son deck.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes elegir 2 cartas aleatorias de la mano de tu rival. Tu rival enseña esas cartas, las pone en su baraja y las baraja todas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scegliere due carte a caso dalla mano del tuo avversario. Il tuo avversario mostra quelle carte e le rimischia nel suo mazzo.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode escolher 2 cartas aleatórias da mão do seu oponente. Seu oponente revela aquelas cartas e as embaralha no próprio baralho.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 2 zufällige Karten aus der Hand deines Gegners wählen. Dein Gegner zeigt dir jene Karten und mischt sie in sein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It raises flowers and uses them as weapons. The more gorgeous the blossom, the more power it contains.",
	},

	thirdParty: {
		cardmarket: 408399,
		tcgplayer: 201196
	}
}

export default card
