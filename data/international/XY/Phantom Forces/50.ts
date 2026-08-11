import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'es-es': "Gigalith",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'de-de': "Brockoloss"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		526,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "High Density Armor",
				'fr-fr': "Armure Résistante",
				'es-es': "Armadura Alta Densidad",
				'it-it': "Corazza Dura",
				'pt-br': "Armadura de Alta Densidade",
				'de-de': "Schwere Rüstung"
			},
			effect: {
				'en-us': "If this Pokémon has full HP, any damage done to this Pokémon by an opponent's attack is reduced by 50 (after applying Weakness and Resistance).",
				'fr-fr': "Si ce Pokémon a tous ses PV, tous les dégâts infligés à ce Pokémon par une attaque de votre adversaire sont réduits de 50 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Si este Pokémon tiene todos sus PS, cualquier daño infligido a este Pokémon por un ataque de tu rival se reduce en 50 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Se questo Pokémon ha tutti i PS, i danni inflitti a questo Pokémon da un attacco del tuo avversario sono ridotti di 50, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Se este Pokémon estiver com o PS cheio, qualquer dano causado a ele pelo ataque de um oponente será reduzido em 50 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Wenn dieses Pokémon volle KP hat, wird Schaden, der diesem Pokémon durch einen gegnerischen Angriff zugefügt wird, um 50 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Overdrive Smash",
				'fr-fr': "Boost Atomisant",
				'es-es': "Sacudida",
				'it-it': "Devastacolpo",
				'pt-br': "Golpe Exaustivo",
				'de-de': "Turbosmash"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's Overdrive Smash attack does 40 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Sacudida de este Pokémon hace 40 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge 40 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, o ataque Golpe Exaustivo deste Pokémon causará 40 de danos adicionais (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Turbosmash dieses Pokémon 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The solar rays it absorbs are processed in its energy core and fired as a ball of light.",
	},

	thirdParty: {
		cardmarket: 281856,
		tcgplayer: 94508
	}
}

export default card
