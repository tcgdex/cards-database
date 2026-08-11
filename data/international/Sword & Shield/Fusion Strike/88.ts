import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [101],
	set: Set,

	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Sonic Boom",
			'fr-fr': "Sonic Boom",
			'de-de': "Ultraschall",
			'es-es': "Bomba Sónica",
			'pt-br': "Explosão Sônica",
			'it-it': "Sonicboom"
		},

		damage: 40,

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Explosion",
			'fr-fr': "Explosion",
			'de-de': "Explosion",
			'es-es': "Explosión",
			'pt-br': "Explosão",
			'it-it': "Esplosione"
		},

		damage: 120,

		effect: {
			'en-us': "This Pokémon also does 90 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 90 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 90 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 90 puntos de daño a sí mismo.",
			'pt-br': "Este Pokémon também causa 90 pontos de dano a si mesmo.",
			'it-it': "Questo Pokémon infligge anche 90 danni a se stesso."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582413,
				tcgplayer: 253244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582413,
				tcgplayer: 253244
			}
		},
	],
}

export default card
