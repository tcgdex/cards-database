import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		'fr-fr': "Léviator",
		'en-us': "Gyarados",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Magicarpe",
		'en-us': "Magikarp",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tempête Vengeresse",
			'en-us': "Revengeful Storm",
			'es-es': "Tormenta Vengativa",
			'it-it': "Tempesta Vendicativa",
			'pt-br': "Tempestade Vingativa",
			'de-de': "Rachesturm"
		},

		effect: {
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			'en-us': "If you have more Prize cards remaining than your opponent, this attack does 100 more damage.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, este ataque hace 100 puntos de daño más.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, questo attacco infligge 100 danni in più.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, este ataque causará 100 pontos de dano a mais.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Charge Folle",
			'en-us': "Berserker Tackle",
			'es-es': "Placaje Locura",
			'it-it': "Assalto Brado",
			'pt-br': "Investida Frenética",
			'de-de': "Berserkerwut"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'en-us': "This Pokémon also does 50 damage to itself.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715517,
				tcgplayer: 497454,
				cardtrader: 248632
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 754782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715517,
				tcgplayer: 497454,
				cardtrader: 248632
			}
		},
	],

	illustrator: "Yuya Oka",

	description: {
		'en-us': "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
	},
}

export default card
