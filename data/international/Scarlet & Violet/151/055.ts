import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [55],
	set: Set,

	name: {
		'fr-fr': "Akwakwak",
		'en-us': "Golduck",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Psykokwak",
		'en-us': "Psyduck",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Sauvetage Aquatique",
			'en-us': "Aquatic Rescue",
			'es-es': "Rescate Acuático",
			'it-it': "Idrosalvataggio",
			'pt-br': "Resgate Aquático",
			'de-de': "Wasserrettung"
		},

		effect: {
			'fr-fr': "Ajoutez jusqu'à 4 Pokémon de votre pile de défausse à votre main.",
			'en-us': "Put up to 4 Pokémon from your discard pile into your hand.",
			'es-es': "Pon hasta 4 Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a quattro Pokémon dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
			'pt-br': "Coloque até 4 Pokémon da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 4 Pokémon aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Super Éclaboussure",
			'en-us': "Super Splash",
			'es-es': "Supersalpicadura",
			'it-it': "Super Splash",
			'pt-br': "Superborrifada",
			'de-de': "Superplatscher"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733650,
				tcgplayer: 516232,
				cardtrader: 261180
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733650,
				tcgplayer: 516232,
				cardtrader: 261180
			}
		},
	],

	illustrator: "Taira Akitsu",

	
}

export default card
