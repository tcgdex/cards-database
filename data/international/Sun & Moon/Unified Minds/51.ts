import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Golisopod",
		'fr-fr': "Sarmuraï",
		'es-es': "Golisopod",
		'it-it': "Golisopod",
		'pt-br': "Golisopod",
		'de-de': "Tectass"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		768,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Emergency Exit",
				'fr-fr': "Repli Tactique",
				'es-es': "Retirada",
				'it-it': "Passoindietro",
				'pt-br': "Saída de Emergência",
				'de-de': "Rückzug"
			},
			effect: {
				'en-us': "If this Pokémon has 2 or fewer Energy attached to it, it has no Retreat Cost.",
				'fr-fr': "Si 2 Énergies ou moins sont attachées à ce Pokémon, il n’a pas de Coût de Retraite.",
				'es-es': "Si este Pokémon tiene 2 o menos Energías unidas a él, no tiene ningún Coste de Retirada.",
				'it-it': "Se questo Pokémon ha due o meno Energie assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon tiver 2 ou menos Energias ligadas a ele, não terá custo de Recuo.",
				'de-de': "Wenn an dieses Pokémon 2 oder weniger Energien angelegt sind, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "First Impression",
				'fr-fr': "Escarmouche",
				'es-es': "Escaramuza",
				'it-it': "Schermaglia",
				'pt-br': "Primeira Impressão",
				'de-de': "Überrumpler"
			},
			effect: {
				'en-us': "If this Pokémon was on the Bench and became your Active Pokémon this turn, this attack does 60 more damage.",
				'fr-fr': "Si ce Pokémon était sur le Banc et est devenu votre Pokémon Actif pendant ce tour, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon estaba en la Banca y se ha convertido en tu Pokémon Activo en este turno, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon era in panchina ed è diventato il tuo Pokémon attivo in questo turno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon estava no Banco e se tornou o seu Pokémon Ativo nesta rodada, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon auf der Bank war und in diesem Zug zu deinem Aktiven Pokémon wurde, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The shell covering its body is as hard as diamond. This Pokémon will do anything it takes to win.",
	},

	thirdParty: {
		cardmarket: 388082,
		tcgplayer: 194974
	}
}

export default card
