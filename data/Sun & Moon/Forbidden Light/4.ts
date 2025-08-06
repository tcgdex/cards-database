import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		es: "Abomasnow",
		it: "Abomasnow",
		pt: "Abomasnow",
		de: "Rexblisar"
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
		"Grass",
	],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blessings of the Frost",
				fr: "Bénédiction du Gel",
				es: "Bendiciones de la Nieve",
				it: "Preghiera dei Ghiacci",
				pt: "Bênçãos Geladas",
				de: "Segen des Frostes"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may attach a Grass Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez attacher une carte Énergie Grass de votre pile de défausse à l’un de vos Pokémon.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes unir 1 carta de Energía Grass de tu pila de descartes a 1 de tus Pokémon.",
				it: "Quando giochi questo Pokémon dalla tua mano durante il tuo turno per far evolvere uno dei tuoi Pokémon, puoi assegnare a uno dei tuoi Pokémon una carta Energia Grass dalla tua pila degli scarti.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode ligar 1 carta de Energia Grass da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Grass-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Hammer",
				fr: "Marteau Hypnotique",
				es: "Martillo Hipnótico",
				it: "Martello Ipnotico",
				pt: "Martelo Hipnótico",
				de: "Hypnohammer"
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 355525,
		tcgplayer: 165651
	}
}

export default card
