import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tsareena",
		'fr-fr': "Sucreine",
		'es-es': "Tsareena",
		'it-it': "Tsareena",
		'pt-br': "Tsareena",
		'de-de': "Fruyal"
	},
	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		763,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Queenly Majesty",
				'fr-fr': "Prestance Royale",
				'es-es': "Regia Presencia",
				'it-it': "Regalità",
				'pt-br': "Presença Régia",
				'de-de': "Majestät"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand. Then, discard a card from it.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main. Puis défaussez-en une carte.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano. Después, descarta 1 de sus cartas.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano. Poi scartane una.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode fazer com que o seu oponente revele a própria mão. Em seguida, descarte 1 carta da mão dele(a).",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen. Lege anschließend 1 Handkarte deines Gegners auf seinen Ablagestapel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trop Kick",
				'fr-fr': "Botte Sucrette",
				'es-es': "Patada Tropical",
				'it-it': "Tropicalcio",
				'pt-br': "Chute Tropical",
				'de-de': "Tropenkick"
			},
			effect: {
				'en-us': "Heal 20 damage and remove all Special Conditions from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
				'es-es': "Cura 20 puntos de daño y elimina todas las Condiciones Especiales de este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni e rimuovi tutte le condizioni speciali che lo influenzano.",
				'pt-br': "Cure 20 pontos de dano e remova todas as Condições Especiais deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon. Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "Its long, striking legs aren't just for show but to be used to kick with skill. In victory, it shows off by kicking the defeated, laughing boisterously.",
	},
}

export default card
