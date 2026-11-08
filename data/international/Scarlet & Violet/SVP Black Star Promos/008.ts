import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [966],
	set: Set,

	name: {
		'en-us': "Revavroom",
		'fr-fr': "Vrombotor",
		'es-es': "Revavroom",
		'it-it': "Revavroom",
		'pt-br': "Revavroom",
		'de-de': "Knattatox"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Varoom",
		'fr-fr': "Vrombi",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rumbling Engine",
			'fr-fr': "Moteur Vrombissant",
			'es-es': "Motor Ruidoso",
			'it-it': "Motore Rombante",
			'pt-br': "Motor Barulhento",
			'de-de': "Knatternder Motor"
		},

		effect: {
			'en-us': "You must discard an Energy card from your hand in order to use this Ability. Once during your turn, you may draw cards until you have 6 cards in your hand.",
			'fr-fr': "Vous devez défausser une carte Énergie de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher des cartes jusqu'à en avoir 6 en main.",
			'es-es': "Debes descartar 1 carta de Energía de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar cartas hasta que tengas 6 cartas en tu mano.",
			'it-it': "Devi scartare una carta Energia che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare fino ad avere sei carte in mano.",
			'pt-br': "Você deve descartar uma carta de Energia da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar cartas até ter 6 cartas na sua mão.",
			'de-de': "Du musst 1 Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du so lange Karten ziehen, bis du 6 Karten auf deiner Hand hast."
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Knock Away",
			'fr-fr': "Asticotage",
			'es-es': "Derribar",
			'it-it': "Scaraventa",
			'pt-br': "Jogar Longe",
			'de-de': "Zurückschlagen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 90 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 90 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 90 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",
	illustrator: "DOM",
	description: {
		'en-us': "It creates a gas out of poison and minerals from rocks. It then detonates the gas in its cylinders— now numbering eight—to generate energy.",
	},
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 692230,
				tcgplayer: 487756
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 761122,
				tcgplayer: 515203
			},
		}
	],
}

export default card
