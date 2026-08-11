import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [127],
	set: Set,

	name: {
		'fr-fr': "Scarabrute",
		'en-us': "Pinsir",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Force Poigne",
			'en-us': "Vise Grip",
			'es-es': "Agarre",
			'it-it': "Presa",
			'pt-br': "Agarramento Compressor",
			'de-de': "Klammer"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'fr-fr': "Lancer Téméraire",
			'en-us': "Reckless Throw",
			'es-es': "Lanzamiento Audaz",
			'it-it': "Lancio Avventato",
			'pt-br': "Arremesso Imprudente",
			'de-de': "Waghalsiger Wurf"
		},

		effect: {
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If you have more Prize cards remaining than your opponent, this attack does 90 more damage.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 90 puntos de daño más.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon clamps its pincers down on its prey and then either splits the prey in half or flings it away.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733722,
				tcgplayer: 516690,
				cardtrader: 261205
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733722,
				tcgplayer: 516690,
				cardtrader: 261205
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
