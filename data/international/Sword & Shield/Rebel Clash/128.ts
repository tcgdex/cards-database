import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [212],

	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'es-es': "Scizor",
		'it-it': "Scizor",
		'pt-br': "Scizor",
		'de-de': "Scherox"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Raid",
				'fr-fr': "Razzia Obscure",
				'es-es': "Raid Oscuro",
				'it-it': "Raid",
				'pt-br': "Reide",
				'de-de': "Überfall"
			},
			effect: {
				'en-us': "If this Pokémon evolved from Scyther during this turn, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon a évolué d'Insécateur pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si este Pokémon ha evolucionado de Scyther durante este turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se questo Pokémon si è evoluto da Scyther durante questo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se este Pokémon evoluiu de Scyther durante este turno, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn sich dieses Pokémon während dieses Zuges aus Sichlor entwickelt hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Claw",
				'fr-fr': "Griffe de Garde",
				'es-es': "Garra Guardia",
				'it-it': "Difesartiglio",
				'pt-br': "Garra Protetora",
				'de-de': "Abwehrklaue"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 130,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Once it has identified something as an enemy, it will continue beating them with its steel-hard pincers until there's nothing left but scraps."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458038,
				tcgplayer: 213224
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458038,
				tcgplayer: 213224
			}
		},
	],
}

export default card
