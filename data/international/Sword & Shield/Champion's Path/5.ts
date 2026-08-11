import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	dexId: [830],

	name: {
		'en-us': "Eldegoss V",
		'fr-fr': "Blancoton V",
		'es-es': "Eldegoss V",
		'it-it': "Eldegoss V",
		'pt-br': "Eldegoss V",
		'de-de': "Cottomi V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Grass",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Happy Match",
				'fr-fr': "Parfait Accord",
				'es-es': "Emparejamiento Feliz",
				'it-it': "Intesa Vincente",
				'pt-br': "Combinação Feliz",
				'de-de': "Zusammenpassen"
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Supporter card from your discard pile into your hand.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Supporter de votre pile de défausse à votre main.",
				'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes poner 1 carta de Partidario de tu pila de descartes en tu mano.",
				'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi prendere una carta Aiuto dalla tua pila degli scarti e aggiungerla alle carte che hai in mano.",
				'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá colocar 1 carta de Apoiador da sua pilha de descarte na sua mão.",
				'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand nehmen."
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
				'en-us': "Float Up",
				'fr-fr': "Flottement",
				'es-es': "Flotar en el Aire",
				'it-it': "Sospensione",
				'pt-br': "Voo Flutuante",
				'de-de': "Hinaufschweben"
			},
			effect: {
				'en-us': "You may shuffle this Pokémon and all attached cards into your deck.",
				'fr-fr': "Vous pouvez mélanger dans votre deck ce Pokémon et toutes les cartes attachées.",
				'es-es': "Puedes poner este Pokémon y todas las cartas unidas a él en tu baraja y barajar todas las cartas.",
				'it-it': "Puoi rimischiare questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Você pode embaralhar este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Du kannst dieses Pokémon und alle angelegten Karten in dein Deck mischen."
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
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499880,
		tcgplayer: 223001
	}
}

export default card
