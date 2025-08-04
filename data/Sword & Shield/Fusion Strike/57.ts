import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [160],
	set: Set,

	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		es: "Feraligatr",
		it: "Feraligatr",
		pt: "Feraligatr",
		de: "Impergator"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		en: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rowdy",
			fr: "Tumultueux",
			de: "Rowdy",
			es: "Alborotador",
			pt: "Desordeiro",
			it: "Turbolento"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you must flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous devez lancer une pièce. Si c'est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 cartes du dessus de votre deck.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, musst du 1 Münze werfen. Lege bei Kopf die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. Lege bei Zahl die obersten 5 Karten deines Decks auf deinen Ablagestapel.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, debes lanzar 1 moneda. Si sale cara, descarta las 5 primeras cartas de la baraja de tu rival. Si sale cruz, descarta las 5 primeras cartas de tu baraja.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você deverá jogar 1 moeda. Se sair cara, descarte as 5 cartas de cima do baralho do seu oponente. Se sair coroa, descarte as 5 cartas de cima do seu baralho.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, devi lanciare una moneta. Se esce testa, scarta le prime cinque carte del mazzo del tuo avversario. Se esce croce, scarta le prime cinque carte del tuo mazzo."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Crunch",
			fr: "Mâchouille",
			de: "Knirscher",
			es: "Triturar",
			pt: "Mastigada",
			it: "Sgranocchio"
		},

		damage: 140,

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582191,
		tcgplayer: 253188
	}
}

export default card
