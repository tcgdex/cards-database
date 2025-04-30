import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		es: "Tyranitar",
		de: "Despotar",
		it: "Tyranitar",
		pt: "Tyranitar",
		'es-mx': "Tyranitar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Daunting Gaze",
			fr: "Regard Patibulaire",
			es: "Mirada Opresiva",
			de: "Einschüchternder Blick",
			it: "Sguardo Minaccioso",
			pt: "Olhar Opressor",
			'es-mx': "Mirada Opresiva"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards from their hand.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto de su mano.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Itemkarten aus seiner Hand spielen.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Item da mão dele.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Objeto de su mano."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Cracking Stomp",
			fr: "Piétinement Écrasant",
			es: "Pisotón Quebrantador",
			de: "Demolierender Stampfer",
			it: "Spaccapestone",
			pt: "Pisoteada Demolidora",
			'es-mx': "Pisotón Quebrantador"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			de: "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'es-mx': "Descarta las primeras 2 cartas del mazo de tu rival."
		},

		damage: 150
	}],

	retreat: 3,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
