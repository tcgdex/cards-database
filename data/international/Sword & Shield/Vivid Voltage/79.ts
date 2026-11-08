import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [719],

	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
		'es-es': "Diancie",
		'it-it': "Diancie",
		'pt-br': "Diancie",
		'de-de': "Diancie"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Psychic",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sparkle Veil",
				'fr-fr': "Voile Étincelant",
				'es-es': "Velo Destellante",
				'it-it': "Splendivelo",
				'pt-br': "Véu de Brilhante",
				'de-de': "Glitzernder Schleier"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, your Pokémon take 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, vos Pokémon subissent 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, cualquier daño infligido a tus Pokémon por un ataque de tu rival se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, i danni inflitti ai tuoi Pokémon da un attacco del tuo avversario sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, qualquer dano causado em seu Pokémon por um ataque do seu oponente, será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, wird Schaden, der deinen Pokémon durch einen gegnerischen Angriff zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sensitive Ray",
				'fr-fr': "Rayon Sensible",
				'es-es': "Rayo Sensible",
				'it-it': "Raggio Sensibile",
				'pt-br': "Raio Sensível",
				'de-de': "Feinfühliger Strahl"
			},
			effect: {
				'en-us': "If you played a Supporter card from your hand during this turn, this attack does 70 more damage.",
				'fr-fr': "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si has jugado 1 carta de Partidario de tu mano durante este turno, este ataque hace 70 puntos de daño más.",
				'it-it': "Se hai giocato una carta Aiuto dalla tua mano durante questo turno, questo attacco infligge 70 danni in più.",
				'pt-br': "Se você jogou 1 carta de Apoiador da sua mão durante este turno, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn du eine Unterstützerkarte während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It can instantly create many diamonds by compressing the carbon in the air between its hands."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511815,
				tcgplayer: 226487
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511815,
				tcgplayer: 226487
			}
		},
	],
}

export default card
