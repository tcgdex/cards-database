import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Energize",
				'fr-fr': "Énergisant",
				'es-es': "Vigorizar",
				'it-it': "Energizza",
				'pt-br': "Energizar",
				'de-de': "Energiezufuhr"
			},
			effect: {
				'en-us': "Attach a Lightning Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
				'es-es': "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
				'it-it': "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
				'pt-br': "Ligue um card de Energia Lightning da sua pilha de descarte a este Pokémon.",
				'de-de': "Nimm 1 Lightning-Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Spark Bolt",
				'fr-fr': "Éclair Étincelant",
				'es-es': "Rayo Chispa",
				'it-it': "Scintillabolide",
				'pt-br': "Faísca de Raio",
				'de-de': "Funkenblitz"
			},
			effect: {
				'en-us': "You may discard all Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
				'fr-fr': "Vous pouvez défausser toutes les Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías unidas a este Pokémon. Si lo haces, este ataque hace 70 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 70 danni in più.",
				'pt-br': "Você pode descartar toda a Energia ligada a este Pokémon. Se fizer isso, este ataque causará 70 de danos adicionais.",
				'de-de': "Du kannst alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its electric charges can reach even 100,000 volts. Careless contact can cause even an Indian elephant to faint.",
	},

	thirdParty: {
		cardmarket: 293424,
		tcgplayer: 124049
	}
}

export default card
