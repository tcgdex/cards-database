import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [914],
	set: Set,

	name: {
		'en-us': "Quaquaval",
		'fr-fr': "Palmaval",
		'es-es': "Quaquaval",
		'it-it': "Quaquaval",
		'pt-br': "Quaquaval",
		'de-de': "Bailonda"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Quaxwell",
		'fr-fr': "Canarbello"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Energy Carnival",
			'fr-fr': "Carnaval Énergétique",
			'es-es': "Carnaval de Energía",
			'it-it': "Carnevale Energetico",
			'pt-br': "Carnaval de Energia",
			'de-de': "Karneval der Energie"
		},

		effect: {
			'en-us': "Once during your turn, you may attach a Basic Energy card from your hand to 1 of your Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez attacher une carte Énergie de base de votre main à l'un de vos Pokémon.",
			'es-es': "Una vez durante tu turno, puedes unir 1 carta de Energía Básica de tu mano a uno de tus Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia base dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá ligar uma carta de Energia Básica da sua mão a 1 dos seus Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Kick",
			'fr-fr': "Pied Hydro",
			'es-es': "Hidropatada",
			'it-it': "Idrocalcio",
			'pt-br': "Chute d'Água",
			'de-de': "Hydrokick"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "A single kick from a Quaquaval can send a truck rolling. This Pokémon uses its powerful legs to perform striking dances from far-off lands.",
	},

	thirdParty: {
        cardmarket: 702348,
        tcgplayer: 487902
    }
}

export default card