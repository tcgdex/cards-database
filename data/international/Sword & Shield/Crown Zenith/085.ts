import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [863],
	set: Set,

	name: {
		'en-us': "Galarian Perrserker",
		'fr-fr': "Berserkatt de Galar",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Sharp Claws",
			'fr-fr': "Griffes Affûtées",
			'es-es': "Garras Afiladas",
			'it-it': "Artigli Affilati",
			'pt-br': "Garras Cortantes",
			'de-de': "Scharfe Krallen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691803,
				tcgplayer: 478221
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691803,
				tcgplayer: 478221
			}
		},
	],
}

export default card
