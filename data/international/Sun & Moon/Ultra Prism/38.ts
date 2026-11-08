import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Abomasnow",
		'fr-fr': "Blizzaroi",
		'es-es': "Abomasnow",
		'it-it': "Abomasnow",
		'pt-br': "Abomasnow",
		'de-de': "Rexblisar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blessings of the Frost",
				'fr-fr': "Bénédiction du Gel",
				'es-es': "Bendiciones de la Nieve",
				'it-it': "Preghiera dei Ghiacci",
				'pt-br': "Bênçãos Geladas",
				'de-de': "Segen des Frostes"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Water Energy card from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
				'es-es': "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir 1 carta de Energía Water de tu pila de descartes a 1 de tus Pokémon.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano durante il tuo turno per far evolvere uno dei tuoi Pokémon, puoi assegnare a uno dei tuoi Pokémon una carta Energia Water dalla tua pila degli scarti.",
				'pt-br': "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode ligar 1 carta de Energia Water da sua pilha de descarte a 1 dos seus Pokémon.",
				'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Water-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Hammer",
				'fr-fr': "Marteau Hypnotique",
				'es-es': "Martillo Hipnótico",
				'it-it': "Martello Ipnotico",
				'pt-br': "Martelo Hipnótico",
				'de-de': "Hypnohammer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.",
	},

	thirdParty: {
		cardmarket: 315969,
		tcgplayer: 157655
	}
}

export default card
