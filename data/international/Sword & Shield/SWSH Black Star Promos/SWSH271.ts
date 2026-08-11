import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [281],
	set: Set,

	name: {
		'fr-fr': "Kirlia",
		'de-de': "Kirlia",
		'es-es': "Kirlia",
		'pt-br': "Kirlia",
		'it-it': "Kirlia",
		'en-us': "Kirlia"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'fr-fr': "Tarsal",
		'de-de': "Trasla",
		'es-es': "Ralts",
		'pt-br': "Ralts",
		'it-it': "Ralts",
		'en-us': "Ralts"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Raffinement",
			'de-de': "Finesse",
			'es-es': "Refinamiento",
			'pt-br': "Requinte",
			'it-it': "Raffinatezza",
			'en-us': "Refinement"
		},

		effect: {
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'fr-fr': "Gifle",
			'de-de': "Hieb",
			'es-es': "Bofetón",
			'pt-br': "Tapa",
			'it-it': "Sberla",
			'en-us': "Slap"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",

	description: {
		'en-us': "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about."
	},

	thirdParty: {
		cardmarket: 681800
	}
}

export default card
