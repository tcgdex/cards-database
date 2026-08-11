import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Beautifly",
		'fr-fr': "Charmillon",
		'es-es': "Beautifly",
		'it-it': "Beautifly",
		'pt-br': "Beautifly",
		'de-de': "Papinella"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		267,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Silcoon",
		'fr-fr': "Armulys",
		'es-es': "Silcoon",
		'it-it': "Silcoon",
		'pt-br': "Silcoon",
		'de-de': "Schaloko"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Miraculous Scales",
				'fr-fr': "Écailles Miraculeuses",
				'es-es': "Escamas Milagrosas",
				'it-it': "Miracolscaglie",
				'pt-br': "Escamas Miraculosas",
				'de-de': "Wundersame Schuppen"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon-EX.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon-EX de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon-EX de tu rival.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon-EX del tuo avversario.",
				'pt-br': "Previne todos os danos causados a este Pokémon pelos ataques dos Pokémon-EX do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Angriffe der Pokémon-EX deines Gegners zugefügt würde."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whirlwind",
				'fr-fr': "Cyclone",
				'es-es': "Remolino",
				'it-it': "Turbine",
				'pt-br': "Ataque de Vento",
				'de-de': "Wirbelwind"
			},
			effect: {
				'en-us': "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It has an aggressive nature. It stabs prey with its long, narrow mouth to drain the prey's fluids.",
	},

	thirdParty: {
		cardmarket: 282673,
		tcgplayer: 98041
	}
}

export default card
