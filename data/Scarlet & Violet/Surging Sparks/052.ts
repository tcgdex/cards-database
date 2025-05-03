import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Quaquaval",
		fr: "Palmaval",
		es: "Quaquaval",
		it: "Quaquaval",
		pt: "Quaquaval",
		de: "Bailonda"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Up-Tempo",
			fr: "Tempo Enlevé",
			es: "Presto",
			it: "Ritmo Veloce",
			pt: "Velocidade Cinco",
			de: "Flottes Tempo"
		},

		effect: {
			en: "You must put a card from your hand on the bottom of your deck in order to use this Ability. Once during your turn, you may draw cards until you have 5 cards in your hand.",
			fr: "Vous devez placer une carte de votre main en dessous de votre deck pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 5 en main.",
			es: "Debes poner 1 carta de tu mano en la parte inferior de tu baraja para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 5 cartas en tu mano.",
			it: "Devi prendere una carta che hai in mano e metterla in fondo al tuo mazzo per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere cinque carte in mano.",
			pt: "Você deve colocar uma carta da sua mão como a carta de baixo do seu baralho para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 5 cartas na sua mão.",
			de: "Du musst 1 Karte aus deiner Hand unter dein Deck legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 5 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			pt: "Hidroborrifada",
			de: "Hydroplatscher"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card
