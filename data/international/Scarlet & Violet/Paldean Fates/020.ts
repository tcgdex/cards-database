import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [170],
	set: Set,

	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Shine On",
			'fr-fr': "Brillance",
			'es-es': "Brilla que te Brilla",
			'it-it': "Fotòforo",
			'pt-br': "Iluminar",
			'de-de': "Ans Licht bringen"
		},

		effect: {
			'en-us': "Look at the top card of your deck. You may put that card on the bottom of your deck.",
			'fr-fr': "Regardez la carte du dessus de votre deck. Vous pouvez placer cette carte en dessous de votre deck.",
			'es-es': "Mira la primera carta de tu baraja. Puedes poner esa carta en la parte inferior de tu baraja.",
			'it-it': "Guarda la prima carta del tuo mazzo. Puoi mettere quella carta in fondo al tuo mazzo.",
			'pt-br': "Olhe a carta de cima do seu baralho. Você pode colocar aquela carta como a carta de baixo do seu baralho.",
			'de-de': "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte unter dein Deck legen."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Tiny Charge",
			'fr-fr': "Décharge Mineure",
			'es-es': "Carga Diminuta",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina",
			'de-de': "Mini-Stromstoß"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751549,
				tcgplayer: 534166,
				cardtrader: 274204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751549,
				tcgplayer: 534166,
				cardtrader: 274204
			}
		},
	],

	illustrator: "yuu",

	description: {
		'en-us': "On the dark ocean floor, its only means of communication is its constantly flashing lights.",
	},

}

export default card
