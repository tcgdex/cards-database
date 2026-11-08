import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Volcarona",
		'fr-fr': "Pyrax",
		'es-es': "Volcarona",
		'it-it': "Volcarona",
		'pt-br': "Volcarona",
		'de-de': "Ramoth"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		637,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Larvesta",
		'fr-fr': "Pyronille"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Scorching Scales",
				'fr-fr': "Écailles Brûlantes",
				'es-es': "Escamas Abrasadoras",
				'it-it': "Ustiospora",
				'pt-br': "Escamas Ardentes",
				'de-de': "Versengende Schuppen"
			},
			effect: {
				'en-us': "Put 4 damage counters instead of 2 on your opponent’s Burned Pokémon between turns.",
				'fr-fr': "Placez 4 marqueurs de dégâts au lieu de 2 sur le Pokémon Brûlé de votre adversaire entre chaque tour.",
				'es-es': "Pon 4 contadores de daño en vez de 2 en el Pokémon Quemado de tu rival entre turnos.",
				'it-it': "Tra un turno e l’altro, metti quattro segnalini danno invece di due sul Pokémon bruciato del tuo avversario.",
				'pt-br': "Coloque 4 marcadores de danos em vez de 2 no Pokémon Queimado do seu oponente entre as vezes de jogar.",
				'de-de': "Lege zwischen den Zügen 4 Schadensmarken anstelle von 2 Schadensmarken auf die verbrannten Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Wind",
				'fr-fr': "Vent Torride"
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Burned.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Brûlé."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales.",
	},

	thirdParty: {
		cardmarket: 280350,
		tcgplayer: 90404
	}
}

export default card
