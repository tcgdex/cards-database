import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		es: "Chandelure",
		it: "Chandelure",
		pt: "Chandelure",
		de: "Skelabra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mountain Roasting",
			fr: "Montagne Roussie",
			es: "Abrasamontañas",
			it: "Cima Rovente",
			pt: "Abrasamento Montanhoso",
			de: "Bergröstung"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 3 cards of your opponent's deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes descartar las 3 primeras cartas de la baraja de tu rival.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi scartare le prime tre carte del mazzo del tuo avversario.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá descartar as 3 cartas de cima do baralho do seu oponente.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel legen."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
			es: "Explosión de Calor",
			it: "Caldobomba",
			pt: "Raio de Calor",
			de: "Hitzestoß"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card