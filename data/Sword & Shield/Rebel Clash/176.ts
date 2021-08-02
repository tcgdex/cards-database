import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eldegoss V",
		fr: "Blancoton V",
		es: "Eldegoss V",
		it: "Eldegoss V",
		pt: "Eldegoss V",
		de: "Cottomi V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Happy Match",
				fr: "Parfait Accord",
				es: "Emparejamiento Feliz",
				it: "Intesa Vincente",
				pt: "Combinação Feliz",
				de: "Zusammenpassen"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Supporter de votre pile de défausse à votre main.",
				es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 carta de Partidario de tu pila de descartes en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano.",
				pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 carta de Apoiador da sua pilha de descarte na sua mão.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Float Up",
				fr: "Flottement",
				es: "Flotar en el Aire",
				it: "Sospensione",
				pt: "Voo Flutuante",
				de: "Hinaufschweben"
			},
			effect: {
				en: "You may shuffle this Pokémon and all attached cards into your deck.",
				fr: "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées.",
				es: "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
				it: "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 180,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
