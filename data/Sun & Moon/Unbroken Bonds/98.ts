import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		207,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Free Flight",
				fr: "Vol Gratuit",
				es: "Vuelo Libre",
				it: "Volo Libero",
				pt: "Vôo Livre",
				de: "Freiflug"
			},
			effect: {
				en: "If this Pokémon has no Energy attached to it, it has no Retreat Cost.",
				fr: "Si aucune Énergie n’est attachée à ce Pokémon, ce Pokémon n’a pas de coût de Retraite.",
				es: "Si este Pokémon no tiene ninguna Energía unida a él, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon non ha delle Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon não possuir Energia ligada a ele, ele não terá Custo para Recuar.",
				de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shinobi Strike",
				fr: "Frappe Shinobi",
				es: "Golpe Shinobi",
				it: "Attacco Ninja",
				pt: "Golpe Ninja",
				de: "Shinobi-Schlag"
			},
			effect: {
				en: "If you played Janine from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si has jugado 1 carta de Sachiko de tu mano durante este turno, este ataque hace 90 puntos de daño más.",
				it: "Se hai giocato Nina dalla tua mano durante questo turno, questo attacco infligge 90 danni in più.",
				pt: "Se você jogou a Janine da sua mão durante esta vez de jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du Janina während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
