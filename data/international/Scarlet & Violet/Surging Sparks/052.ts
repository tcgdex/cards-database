import { Card } from "models/database/card"
import Set from "../Surging Sparks"

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

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Quaxwell",
		'fr-fr': "Canarbello",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Up-Tempo",
			'fr-fr': "Tempo Enlevé",
			'es-es': "Presto",
			'it-it': "Ritmo Veloce",
			'pt-br': "Velocidade Cinco",
			'de-de': "Flottes Tempo"
		},

		effect: {
			'en-us': "You must put a card from your hand on the bottom of your deck in order to use this Ability. Once during your turn, you may draw cards until you have 5 cards in your hand.",
			'fr-fr': "Vous devez placer une carte de votre main en dessous de votre deck pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			'es-es': "Debes poner 1 carta de tu mano en la parte inferior de tu baraja para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			'it-it': "Devi prendere una carta che hai in mano e metterla in fondo al tuo mazzo per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			'pt-br': "Você deve colocar uma carta da sua mão como a carta de baixo do seu baralho para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			'de-de': "Du musst 1 Karte aus deiner Hand unter dein Deck legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'pt-br': "Hidroborrifada",
			'de-de': "Hydroplatscher"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794318,
				tcgplayer: 590030
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794318,
				tcgplayer: 590030
			}
		},
	],

	illustrator: "nagimiso",
	
}

export default card
