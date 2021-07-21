import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Vikavolt",
		fr: "Lucanon",
		es: "Vikavolt",
		it: "Vikavolt",
		pt: "Vikavolt",
		de: "Donarion"
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
		en: "Charjabug",
		fr: "Chrysapile",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stealthy Body",
				fr: "Corps Furtif",
				es: "Cuerpo Sigiloso",
				it: "Corpo Furtivo",
				pt: "Corpo Furtivo",
				de: "Tarnkörper"
			},
			effect: {
				en: "If there is any Stadium card in play, this Pokémon has no Weakness.",
				fr: "S’il y a une carte Stade en jeu, ce Pokémon n’a pas de Faiblesse.",
				es: "Si hay alguna carta de Estadio en juego, este Pokémon no tiene ninguna Debilidad.",
				it: "Se c’è in gioco una carta Stadio, questo Pokémon non ha debolezza.",
				pt: "Se houver alguma carta de Estádio em jogo, este Pokémon não terá Fraqueza.",
				de: "Wenn eine Stadionkarte im Spiel ist, hat dieses Pokémon keine Schwäche."
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
				en: "Electricannon",
				fr: "Canon Électrique",
				es: "Cañón Eléctrico",
				it: "Elettricannone",
				pt: "Canhão Elétrico",
				de: "Elektrokanone"
			},
			effect: {
				en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 100 more damage.",
				fr: "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 100 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías Lightning de este Pokémon. Si lo haces, este ataque hace 100 puntos de daño más.",
				it: "Puoi scartare tutte le Energie Lightning assegnate a questo Pokémon. Se lo fai, questo attacco infligge 100 danni in più.",
				pt: "Você pode descartar todas as Energias Lightning deste Pokémon. Se fizer isto, este ataque causará 100 pontos de dano a mais.",
				de: "Du kannst alle Lightning-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 100 Schadenspunkte mehr zu."
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



}

export default card
