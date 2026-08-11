import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Team Rocket's Exeggcute",
		'fr-fr': "Noeunoeuf de la Team Rocket",
		'es-es': "Exeggcute del Team Rocket",
		'es-mx': "Exeggcute del Equipo Rocket",
		'de-de': "Team Rockets Owei",
		'it-it': "Exeggcute del Team Rocket",
		'pt-br': "Exeggcute da Equipe Rocket"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Focused Wish",
			'fr-fr': "Vœu Fervent",
			'es-es': "Intenso Deseo",
			'es-mx': "Deseo Enfocado",
			'de-de': "Gezielter Wunsch",
			'it-it': "Intensiderio",
			'pt-br': "Desejo Direcionado"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 pontos de dano a mais."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Using telepathy only fellow Exeggcute can pick up on, they always form a cluster of six.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869688,
			tcgplayer: 675889
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870256,
			tcgplayer: 677052
		}
	},
	{
		type: "reverse",
		foil: "team-rocket",
		thirdParty: {
			cardmarket: 869688,
			tcgplayer: 676912
		}
	},
],
}

export default card
