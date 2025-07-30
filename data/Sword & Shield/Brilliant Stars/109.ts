import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [445],
	set: Set,

	name: {
		en: "Garchomp",
		fr: "Carchacrok",
		es: "Garchomp",
		it: "Garchomp",
		pt: "Garchomp",
		de: "Knakrack"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
		es: "Gabite",
		it: "Gabite",
		pt: "Gabite",
		de: "Knarksel"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sonic Slip",
			fr: "Glissade Sonique",
			es: "Deslizamiento Sónico",
			it: "Scivolata Sonica",
			pt: "Destreza Sônica",
			de: "Überschallducken"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon until the end of your opponent's next turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire jusqu'à la fin du prochain tour de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes evitar todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon hasta el final del próximo turno de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prevenire sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon fino alla fine del prossimo turno del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá prevenir todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon até o final do próximo turno do seu oponente.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken der Pokémon deines Gegners, die diesem Pokémon zugefügt werden, verhindern."
		}
	}],

	attacks: [{
		cost: ["Water", "Fighting"],

		name: {
			en: "Dragonblade",
			fr: "Draco-Lame",
			es: "Filo Dragón",
			it: "Lamadidrago",
			pt: "Lâmina do Dragão",
			de: "Drachenklinge"
		},

		effect: {
			en: "Discard the top 2 cards of your deck.",
			fr: "Défaussez les 2 cartes du dessus de votre deck.",
			es: "Descarta las 2 primeras cartas de tu baraja.",
			it: "Scarta le prime due carte del tuo mazzo.",
			pt: "Descarte as 2 cartas de cima do seu baralho.",
			de: "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608655
	}
}

export default card
