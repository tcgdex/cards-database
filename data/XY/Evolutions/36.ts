import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Raichu",
		fr: "Raichu",
		es: "Raichu",
		it: "Raichu",
		pt: "Raichu",
		de: "Raichu"
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
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energize",
				fr: "Énergisant",
				es: "Vigorizar",
				it: "Energizza",
				pt: "Energizar",
				de: "Energiezufuhr"
			},
			effect: {
				en: "Attach a Lightning Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Lightning de votre pile de défausse à ce Pokémon.",
				es: "Une 1 carta de Energía Lightning de tu pila de descartes a este Pokémon.",
				it: "Assegna a questo Pokémon una carta Energia Lightning dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia Lightning da sua pilha de descarte a este Pokémon.",
				de: "Nimm 1 Lightning-Energiekarte von deinem Ablagestapel und lege sie an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Spark Bolt",
				fr: "Éclair Étincelant",
				es: "Rayo Chispa",
				it: "Scintillabolide",
				pt: "Faísca de Raio",
				de: "Funkenblitz"
			},
			effect: {
				en: "You may discard all Energy attached to this Pokémon. If you do, this attack does 70 more damage.",
				fr: "Vous pouvez défausser toutes les Énergies attachées à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías unidas a este Pokémon. Si lo haces, este ataque hace 70 puntos de daño más.",
				it: "Puoi scartare tutte le Energie assegnate a questo Pokémon. Se lo fai, questo attacco infligge 70 danni in più.",
				pt: "Você pode descartar toda a Energia ligada a este Pokémon. Se fizer isso, este ataque causará 70 de danos adicionais.",
				de: "Du kannst alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel legen. Wenn du das machst, fügt dieser Angriff 70 weitere Schadenspunkte zu."
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

	thirdParty: {
		cardmarket: 293424,
		tcgplayer: 124049
	}
}

export default card
