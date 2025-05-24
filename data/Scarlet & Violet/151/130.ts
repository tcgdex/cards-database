import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		fr: "Léviator",
		en: "Gyarados",
		es: "Gyarados",
		it: "Gyarados",
		pt: "Gyarados",
		de: "Garados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "L'Indomptable",
			en: "Untamed One",
			es: "Indomable",
			it: "Fuori Controllo",
			pt: "O Indomável",
			de: "Unzähmbar"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous devez défausser les 5 cartes du dessus de votre deck.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you must discard the top 5 cards of your deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, debes descartar las 5 primeras cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, devi scartare le prime cinque carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você deverá descartar as 5 cartas de cima do seu baralho.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, musst du die obersten 5 Karten deines Decks auf deinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Ultralaser",
			en: "Hyper Beam",
			es: "Hiperrayo",
			it: "Iper Raggio",
			pt: "Hiper-raio",
			de: "Hyperstrahl"
		},

		effect: {
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "Discard an Energy from your opponent's Active Pokémon.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte uma Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 200
	}],

	retreat: 4,
	regulationMark: "G",

	variants: {
		normal: false
	},

	illustrator: "Kouki Saitou"
}

export default card
