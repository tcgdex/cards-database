import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Chatot",
		fr: "Pijako",
		es: "Chatot",
		it: "Chatot",
		pt: "Chatot",
		de: "Plaudagei"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Lucky Match",
				fr: "Accord Opportun",
				es: "Emparejamiento Afortunado",
				it: "Fortunata Intesa",
				pt: "Combinação Sortuda",
				de: "Glücksspiel"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may flip a coin. If heads, put a Supporter card from your discard pile into your hand.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez lancer une pièce. Si c'est face, ajoutez une carte Supporter de votre pile de défausse à votre main.",
				es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes lanzar 1 moneda. Si sale cara, pon 1 carta de Partidario de tu pila de descartes en tu mano.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi lanciare una moneta. Se esce testa, prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
				pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá jogar 1 moeda. Se sair cara, coloque 1 carta de Apoiador da sua pilha de descarte na sua mão.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Münze werfen. Nimm bei Kopf 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
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
				en: "Glide",
				fr: "Glissement",
				es: "Planeo",
				it: "Aliante",
				pt: "Planeio",
				de: "Gleiten"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Colorless"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It can learn and speak human words. If they gather, they all learn the same saying."
	}
}

export default card
