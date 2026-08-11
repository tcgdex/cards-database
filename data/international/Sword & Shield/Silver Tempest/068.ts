import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [281],
	set: Set,

	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Refinement",
			'fr-fr': "Raffinement",
			'es-es': "Refinamiento",
			'it-it': "Raffinatezza",
			'pt-br': "Requinte",
			'de-de': "Finesse"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 2 cartas.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare due carte.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 2 cartas.",
			'de-de': "Du musst 1 Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Karten ziehen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
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
		'en-us': "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682115,
				tcgplayer: 451722
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682115,
				tcgplayer: 451722
			}
		},
	],
}

export default card
