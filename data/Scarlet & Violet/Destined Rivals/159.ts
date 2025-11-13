import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		en: "Arven's Greedent",
		fr: "Rongrigou de Pepper",
		de: "Peppers Schlaraffel",
		it: "Greedent di Pepe",
		es: "Greedent de Damián",
		pt: "Greedent do Arven",
		'es-mx': "Greedent de Damián"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		en: "Arven's Skwovet",
		fr: "Rongourmand de Pepper",
		de: "Peppers Raffel",
		it: "Skwovet di Pepe",
		es: "Skwovet de Damián",
		pt: "Skwovet do Arven",
		'es-mx': "Skwovet de Damián"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Greedy Order",
			fr: "Commande Goulue",
			de: "Gierige Bestellung",
			it: "Ordine Ingordo",
			es: "Pedido Codicioso",
			pt: "Pedido Ganancioso",
			'es-mx': "Pedido Codicioso"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put up to 2 Arven's Sandwich cards from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter à votre main jusqu'à 2 cartes Sandwich de Pepper de votre pile de défausse.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Peppers Sandwich-Karten aus deinem Ablagestapel auf deine Hand nehmen.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere fino a due carte Panino di Pepe dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner hasta 2 cartas de Bocadillo de Damián de tu pila de descartes en tu mano.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar até 2 cartas Sanduíche do Arven da sua pilha de descarte na sua mão.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner hasta 2 cartas de Sándwich de Damián de tu pila de descartes en tu mano."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			de: "Rolltackle",
			it: "Rollazione",
			es: "Placaje Giro",
			pt: "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'reverse'
		},
		{
			type: 'holo'
		},
	]
}

export default card
