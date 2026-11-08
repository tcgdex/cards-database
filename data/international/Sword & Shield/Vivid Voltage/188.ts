import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'fr-fr': "Pikachu VMAX",
		'en-us': "Pikachu VMAX",
		'es-es': "Pikachu VMAX",
		'it-it': "Pikachu VMAX",
		'pt-br': "Pikachu VMAX",
		'de-de': "Pikachu VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Pikachu-V",
		'en-us': "Pikachu V",
		'es-es': "Pikachu V",
		'it-it': "Pikachu-V",
		'pt-br': "Pikachu V",
		'de-de': "Pikachu-V"
	},

	attacks: [{
		name: {
			'fr-fr': "Électacle G-Max",
			'en-us': "G-Max Volt Tackle",
			'es-es': "Gigaplacaje Eléctrico",
			'it-it': "Gigalocomovolt",
			'pt-br': "Investida Trovão G-Max",
			'de-de': "Giga-Volttackle"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser toute l'Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires.",
			'en-us': "You may discard all Energy from this Pokémon. If you do, this attack does 150 more damage.",
			'es-es': "Puedes descartar todas las Energías de este Pokémon. Si lo haces, este ataque hace 150 puntos de daño más.",
			'it-it': "Puoi scartare tutte le Energie da questo Pokémon. Se lo fai, questo attacco infligge 150 danni in più.",
			'pt-br': "Você pode descartar todas as Energias deste Pokémon. Se fizer isto, este ataque causará 150 pontos de dano a mais.",
			'de-de': "Du kannst alle Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 150 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 512650,
				tcgplayer: 226434
			}
		},
	],
}

export default card
