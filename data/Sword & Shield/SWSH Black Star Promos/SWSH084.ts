import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Eldegoss V",
		fr: "Blancoton V",
		de: "Cottomi V",
		es: "Eldegoss V",
		pt: "Eldegoss V",
		it: "Eldegoss V"
	},

	rarity: "None",
	dexId: [830],
	hp: 180,
	types: ["Grass"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Happy Match",
			fr: "Parfait Accord",
			de: "Zusammenpassen",
			es: "Emparejamiento Feliz",
			pt: "Combinação Feliz",
			it: "Intesa Vincente"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Supporter de votre pile de défausse à votre main.",
			de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand nehmen.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 carta de Partidario de tu pila de descartes en tu mano.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 carta de Apoiador da sua pilha de descarte na sua mão.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Float Up",
			fr: "Flottement",
			de: "Hinaufschweben",
			es: "Flotar en el Aire",
			pt: "Voo Flutuante",
			it: "Sospensione"
		},

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck.",
			fr: "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées.",
			de: "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen.",
			es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
			pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
			it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo."
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V"
}

export default card
