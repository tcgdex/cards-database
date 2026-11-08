import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Kommo-o",
		'fr-fr': "Ékaïser",
		'es-es': "Kommo-o",
		'it-it': "Kommo-o",
		'pt-br': "Kommo-o",
		'de-de': "Grandiras"
	},

	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		784,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Hakamo-o",
		'fr-fr': "Écaïd",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
				'es-es': "Presión de Guardia",
				'it-it': "Pressadifesa",
				'pt-br': "Aperto Protetor",
				'de-de': "Schutzdruck"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Raging Uppercut",
				'fr-fr': "Uppercut Enragé",
				'es-es': "Gancho Furioso",
				'it-it': "Montante Furioso",
				'pt-br': "Gancho Devastador",
				'de-de': "Wuthieb"
			},
			effect: {
				'en-us': "If this Pokémon has 8 or more damage counters on it, this attack does 120 more damage.",
				'fr-fr': "Si ce Pokémon a 8 marqueurs de dégâts ou plus, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 8 o más contadores de daño sobre él, este ataque hace 120 puntos de daño más.",
				'it-it': "Se questo Pokémon ha otto o più segnalini danno, questo attacco infligge 120 danni in più.",
				'pt-br': "Se este Pokémon tiver 8 ou mais contadores de dano nele, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn auf diesem Pokémon mindestens 8 Schadensmarken liegen, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its rigid scales function as offense and defense. In the past, its scales were processed and used to make weapons and other commodities.",
	},

	thirdParty: {
		cardmarket: 363525,
		tcgplayer: 175484
	}
}

export default card
