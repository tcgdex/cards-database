import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'de-de': "Symvolara",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'es-es': "Sigilyph",
		'es-mx': "Sigilyph"
	},

	illustrator: "Krgc",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Reflect",
			'fr-fr': "Protection",
			'de-de': "Reflektor",
			'it-it': "Riflesso",
			'pt-br': "Refletir",
			'es-es': "Reflejo",
			'es-mx': "Reflejo"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 40 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 40 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 40 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 40 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques hacen 40 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Telekinesis",
			'fr-fr': "Lévikinésie",
			'de-de': "Telekinese",
			'it-it': "Telecinesi",
			'pt-br': "Telecinese",
			'es-es': "Telequinesis",
			'es-mx': "Telequinesis"
		},

		effect: {
			'en-us': "This attack does 70 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Cette attaque inflige 70 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 70 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche oder Resistenz nicht verändert.",
			'it-it': "Questo attacco infligge 70 danni a uno dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "Este ataque causa 70 pontos de dano a 1 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza ou Resistência.",
			'es-es': "Este ataque hace 70 puntos de daño a uno de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
			'es-mx': "Este ataque hace 70 puntos de daño a 1 de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835973,
				tcgplayer: 642150
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835973,
				tcgplayer: 642150
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836561,
				tcgplayer: 642393
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836562,
				tcgplayer: 642321
			}
		},
	],
}

export default card
