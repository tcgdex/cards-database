import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1012],
	set: Set,

	name: {
		'en-us': "Poltchageist",
		'fr-fr': "Poltchageist",
		'es-es': "Poltchageist",
		'it-it': "Poltchageist",
		'pt-br': "Poltchageist",
		'de-de': "Mortcha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tea Server",
			'fr-fr': "Serveur de Thé",
			'es-es': "Servir el Té",
			'it-it': "Servitè",
			'pt-br': "Serviço de Chá",
			'de-de': "Teeservice"
		},

		effect: {
			'en-us': "Put a Basic {G} Energy card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Énergie {G} de base de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Energía {G} Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Energia base {G} dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Energia {G} Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Basis-{G}-Energiekarte aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'pt-br': "Ataque Surpresa",
			'de-de': "Überraschungsangriff"
		},

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Poltchageist looks like a regional form of Sinistea, but it was recently discovered that the two Pokémon are entirely unrelated.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769195,
				tcgplayer: 550065
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769195,
				tcgplayer: 550065
			}
		},
	],

	illustrator: "Souichirou Gunjima",

}

export default card