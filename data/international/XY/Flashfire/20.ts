import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Pyroar",
		'fr-fr': "Némélios",
		'es-es': "Pyroar",
		'it-it': "Pyroar",
		'pt-br': "Pyroar",
		'de-de': "Pyroleo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		668,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Intimidating Mane",
				'fr-fr': "Crinière Intimidante",
				'es-es': "Melena Intimidatoria",
				'it-it': "Criniera Minacciosa",
				'pt-br': "Juba Intimidadora",
				'de-de': "Schreckensmähne"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks from your opponent's Basic Pokémon.",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon de base de votre adversaire.",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques de los Pokémon Básicos de tu rival.",
				'it-it': "Previeni tutti i danni da attacchi inflitti a questo Pokémon dai Pokémon Base del tuo avversario.",
				'pt-br': "Previne todos os danos causados a este Pokémon pelos ataques dos Pokémon Básicos do seu oponente.",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon durch Angriffe von Basis-Pokémon deines Gegners zugefügt würde."
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
				'en-us': "Scorching Fang",
				'fr-fr': "Croc Ardent",
				'es-es': "Colmillo Abrasador",
				'it-it': "Ustiodenti",
				'pt-br': "Presa Ardente",
				'de-de': "Sengender Reißzahn"
			},
			effect: {
				'en-us': "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
				'fr-fr': "Vous pouvez défausser une Énergie Fire attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Puedes descartar 1 Energía Fire unida a este Pokémon. Si lo haces, este ataque hace 30 puntos de daño más.",
				'it-it': "Puoi scartare un'Energia Fire assegnata a questo Pokémon. Se lo fai, questo attacco infligge 30 danni in più.",
				'pt-br': "Você pode descartar uma Energia Fire ligada a este Pokémon. Se fizer isso, esse ataque causará 30 de danos adicionais.",
				'de-de': "Du kannst 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The male with the largest mane of fire is the leader of the pride.",
	},

	thirdParty: {
		cardmarket: 281503,
		tcgplayer: 91153
	}
}

export default card
