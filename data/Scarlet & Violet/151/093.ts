import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [93],
	set: Set,

	name: {
		fr: "Spectrum",
		en: "Haunter",
		es: "Haunter",
		it: "Haunter",
		pt: "Haunter",
		de: "Alpollo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Fantominus",
		en: "Gastly",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Retour d'Esprit",
			en: "Spirit Return",
			es: "Espíritu Retorno",
			it: "Ritornospirito",
			pt: "Retorno Espiritual",
			de: "Seelenrückkehr"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez ajouter l'une des cartes Supporter de la pile de défausse de votre adversaire à sa main.",
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Supporter card from your opponent's discard pile into their hand.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes poner 1 carta de Partidario de la pila de descartes de tu rival en su mano.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prendere una carta Aiuto dalla pila degli scarti del tuo avversario e aggiungerla alle carte che ha in mano.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá colocar uma carta de Apoiador da pilha de descarte do seu oponente na mão dele.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Unterstützerkarte aus dem Ablagestapel deines Gegners auf seine Hand geben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Murmure",
			en: "Mumble",
			es: "Farfullar",
			it: "Borbottio",
			pt: "Resmungo",
			de: "Grummeln"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Tomokazu Komiya",

	thirdParty: {
		cardmarket: 733688
	}
}

export default card