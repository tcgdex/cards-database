import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Excadrill",
		'fr-fr': "Minotaupe",
		'es-es': "Excadrill",
		'it-it': "Excadrill",
		'pt-br': "Excadrill",
		'de-de': "Stalobor"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		530,
	],

	hp: 100,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Drill Run",
				'fr-fr': "Tunnelier",
				'es-es': "Taladradora",
				'it-it': "Giravvita",
				'pt-br': "Furação",
				'de-de': "Schlagbohrer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Straight Claw",
				'fr-fr': "Griffe Rectiligne",
				'es-es': "Garra Recta",
				'it-it': "Artiglio Dritto",
				'pt-br': "Garra Direta",
				'de-de': "Pfeilgerade Klaue"
			},
			effect: {
				'en-us': "You may discard an Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 Energía unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				'it-it': "Puoi scartare un'Energia assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				'pt-br': "Você pode descartar uma Energia ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				'de-de': "Du kannst 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
	},

	thirdParty: {
		cardmarket: 273627,
		tcgplayer: 95994
	}
}

export default card
