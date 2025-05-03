import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [45],
	set: Set,

	name: {
		fr: "Rafflesia",
		en: "Vileplume",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Énergie Maxi-Florissante",
			en: "Fully Blooming Energy",
			es: "Floración Total de Energía",
			it: "Energia in Fiore",
			pt: "Energia Florescida",
			de: "Voll blühende Energie"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez regarder les 8 cartes du dessus de votre deck, puis attacher le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 8 cards of your deck and attach any number of Basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes mirar las 8 primeras cartas de tu baraja y unir cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi guardare le prime otto carte del tuo mazzo e assegnare un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon nel modo che preferisci. Rimischia le altre carte nel tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá olhar as 8 cartas de cima do seu baralho e ligar qualquer número de cartas de Energia Básica que encontrar lá aos seus Pokémon como desejar. Embaralhe as outras cartas de volta no seu baralho.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dir die obersten 8 Karten deines Decks anschauen und beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Pokémon anlegen. Mische die anderen Karten zurück in dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			fr: "Lance-Soleil",
			en: "Solar Beam",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Raio Solar",
			de: "Solarstrahl"
		},

		damage: 90
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	}
}

export default card
