import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Vikavolt",
		'fr-fr': "Lucanon",
		'es-es': "Vikavolt",
		'it-it': "Vikavolt",
		'pt-br': "Vikavolt",
		'de-de': "Donarion"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		738,
	],

	hp: 150,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Stealthy Body",
				'fr-fr': "Corps Furtif",
				'es-es': "Cuerpo Sigiloso",
				'it-it': "Corpo Furtivo",
				'pt-br': "Corpo Furtivo",
				'de-de': "Tarnkörper"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, this Pokémon has no Weakness.",
				'fr-fr': "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Faiblesse.",
				'es-es': "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ninguna Debilidad.",
				'it-it': "Se c’è in gioco una carta Stadio, questo Pokémon non ha debolezza.",
				'pt-br': "Se houver alguma carta de Estádio em jogo, este Pokémon não terá Fraqueza.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electricannon",
				'fr-fr': "Canon Électrique",
				'es-es': "Cañón Eléctrico",
				'it-it': "Elettricannone",
				'pt-br': "Canhão Elétrico",
				'de-de': "Elektrokanone"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 100 more damage.",
				'fr-fr': "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
				'es-es': "Puedes descartar todas las Energías Lightning de este Pokémon. Si lo haces, este ataque hace 100 puntos de daño más.",
				'it-it': "Puoi scartare tutte le Energie Lightning assegnate a questo Pokémon. Se lo fai, questo attacco infligge 100 danni in più.",
				'pt-br': "Você pode descartar todas as Energias Lightning deste Pokémon. Se fizer isto, este ataque causará 100 pontos de dano a mais.",
				'de-de': "Du kannst alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 100 Schadenspunkte mehr zu."
			},
			damage: "120+",

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

	retreat: 2,

	description: {
		'en-us': "It has an organ that generates electricity in its abdomen. It concentrates energy in its strong jaws and fires off powerful jolts of electricity.",
	},

	thirdParty: {
		cardmarket: 372349,
		tcgplayer: 189160
	}
}

export default card
