import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Arven's Greedent",
		'fr-fr': "Rongrigou de Pepper",
		'de-de': "Peppers Schlaraffel",
		'it-it': "Greedent di Pepe",
		'es-es': "Greedent de Damián",
		'pt-br': "Greedent do Arven",
		'es-mx': "Greedent de Damián"
	},


	illustrator: "Natsumi Yoshida",

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Arven's Skwovet",
		'fr-fr': "Rongourmand de Pepper",
		'de-de': "Peppers Raffel",
		'it-it': "Skwovet di Pepe",
		'es-es': "Skwovet de Damián",
		'pt-br': "Skwovet do Arven",
		'es-mx': "Skwovet de Damián"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Greedy Order",
			'fr-fr': "Commande Goulue",
			'de-de': "Gierige Bestellung",
			'it-it': "Ordine Ingordo",
			'es-es': "Pedido Codicioso",
			'pt-br': "Pedido Ganancioso",
			'es-mx': "Pedido Codicioso"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put up to 2 Arven's Sandwich cards from your discard pile into your hand.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter à votre main jusqu'à 2 cartes Sandwich de Pepper de votre pile de défausse.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zu 2 Peppers Sandwich-Karten aus deinem Ablagestapel auf deine Hand nehmen.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere fino a due carte Panino di Pepe dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner hasta 2 cartas de Bocadillo de Damián de tu pila de descartes en tu mano.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar até 2 cartas Sanduíche do Arven da sua pilha de descarte na sua mão.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes poner hasta 2 cartas de Sándwich de Damián de tu pila de descartes en tu mano."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'es-es': "Placaje Giro",
			'pt-br': "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826079,
				tcgplayer: 633005
			}
		},
	],
}

export default card
