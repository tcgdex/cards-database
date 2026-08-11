import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [1020],
	set: Set,

	name: {
		'en-us': "Gouging Fire",
		'fr-fr': "Feu-Perçant",
		'es-es': "Flamariete",
		'it-it': "Vampeaguzze",
		'pt-br': "Fogo Corrosão",
		'de-de': "Keilflamme"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Blazing Charge",
			'fr-fr': "Charge Enflammée",
			'es-es': "Carga Calcinadora",
			'it-it': "Carica Ardente",
			'pt-br': "Avanço Flamejante",
			'de-de': "Lodernder Ansturm"
		},

		effect: {
			'en-us': "If your opponent has 4 or fewer Prize cards remaining, this attack does 70 more damage.",
			'fr-fr': "S'il reste 4 cartes Récompense ou moins à votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si a tu rival le quedan 4 cartas de Premio o menos, este ataque hace 70 puntos de daño más.",
			'it-it': "Se il tuo avversario ha quattro o meno carte Premio rimanenti, questo attacco infligge 70 danni in più.",
			'pt-br': "Se o seu oponente tiver 4 ou menos cartas de Prêmio restantes, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner 4 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794304,
				tcgplayer: 589958
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794304,
				tcgplayer: 589958
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 799716,
			}
		},
	],

	illustrator: "AKIRA EGAWA",
	
}

export default card
