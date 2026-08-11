import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Expansion",
				'es-es': "Expandir",
				'it-it': "Potenzia",
				'pt-br': "Expandir",
				'de-de': "Ausdehnen"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Charmed Slap",
				'fr-fr': "Gifle Décorée",
				'es-es': "Bofetada Encantada",
				'it-it': "Sberla Incantata",
				'pt-br': "Tapa Pingente",
				'de-de': "Schmuckschlag"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card that has \"Fairy Charm\" in its name attached to it, this attack does 70 more damage.",
				'fr-fr': "Si une carte Outil Pokémon avec « Amulette Féerique » dans son nom est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon que tenga \"Amuleto Hada\" en su nombre unida a él, este ataque hace 70 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata con “Amuleto Folletto” nel nome, questo attacco infligge 70 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon que tenha “Pingente de Fada” em seu nome ligada a ele, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, bei der Feenschmuck zum Namen gehört, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "As it inhales, it expands…and expands…and expands. Wigglytuff compete to see which one can inflate itself the most.",
	},

	thirdParty: {
		cardmarket: 365771,
		tcgplayer: 178953
	}
}

export default card
