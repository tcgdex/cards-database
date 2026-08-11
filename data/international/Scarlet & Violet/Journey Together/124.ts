import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'de-de': "Ohrdoch",
		'it-it': "Audino",
		'pt-br': "Audino",
		'es-mx': "Audino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Beckon",
			'fr-fr': "Invite",
			'es-es': "Hacer Señas",
			'de-de': "Herbeiwinken",
			'it-it': "Appello",
			'pt-br': "Aceno",
			'es-mx': "Invitar"
		},

		effect: {
			'en-us': "Put a Supporter card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
			'de-de': "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand.",
			'it-it': "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Apoiador da sua pilha de descarte na sua mão.",
			'es-mx': "Pon 1 carta de Partidario de tu pila de descartes en tu mano."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Zen Headbutt",
			'fr-fr': "Psykoud'Boul",
			'es-es': "Cabezazo Zen",
			'de-de': "Zen-Kopfstoß",
			'it-it': "Cozzata Zen",
			'pt-br': "Cabeçada Zen",
			'es-mx': "Cabezazo Zen"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Minahamu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817276,
				tcgplayer: 623551
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817276,
				tcgplayer: 623551
			}
		},
	],
}

export default card
