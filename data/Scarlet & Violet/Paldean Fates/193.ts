import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		en: "Revavroom",
		fr: "Vrombotor",
		es: "Revavroom",
		it: "Revavroom",
		pt: "Revavroom",
		de: "Knattatox"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rumbling Engine",
			fr: "Moteur Vrombissant",
			es: "Motor Ruidoso",
			it: "Motore Rombante",
			pt: "Motor Barulhento",
			de: "Knatternder Motor"
		},

		effect: {
			en: "You must discard an Energy card from your hand in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.",
			fr: "Vous devez défausser une carte Énergie de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			es: "Debes descartar 1 carta de Energía de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			it: "Devi scartare una carta Energia che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			pt: "Você deve descartar uma carta de Energia da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão.",
			de: "Du musst 1 Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Knock Away",
			fr: "Asticotage",
			es: "Derribar",
			it: "Scaraventa",
			pt: "Jogar Longe",
			de: "Zurückschlagen"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 90 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 90 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "GOSSAN",

	thirdParty: {
		cardmarket: 751603
	}
}

export default card