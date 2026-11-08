import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [80],
	set: Set,

	name: {
		'en-us': "Galarian Slowbro",
		'fr-fr': "Flagadoss de Galar",
		'es-es': "Slowbro de Galar",
		'it-it': "Slowbro di Galar",
		'pt-br': "Slowbro de Galar",
		'de-de': "Galar-Lahmus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Galarian Slowpoke",
		'fr-fr': "Ramoloss de Galar",
		'es-es': "Slowpoke de Galar",
		'it-it': "Slowpoke di Galar",
		'pt-br': "Slowpoke de Galar",
		'de-de': "Galar-Flegmon"
	},

	attacks: [{
		name: {
			'en-us': "Splattering Poison",
			'fr-fr': "Poison Éclaboussant",
			'es-es': "Veneno Salpicante",
			'it-it': "Spruzzata di Veleno",
			'pt-br': "Respingar Veneno",
			'de-de': "Giftgespritze"
		},

		effect: {
			'en-us': "Both Active Pokémon are now Poisoned.",
			'fr-fr': "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			'es-es': "Ambos Pokémon Activos pasan a estar Envenenados.",
			'it-it': "Entrambi i Pokémon attivi vengono avvelenati.",
			'pt-br': "Ambos os Pokémon Ativos agora estão Envenenados.",
			'de-de': "Beide Aktiven Pokémon sind jetzt vergiftet."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'en-us': "Unhinged Hammer",
			'fr-fr': "Marteau Dérangé",
			'es-es': "Martillo Desquiciado",
			'it-it': "Martello Scatenato",
			'pt-br': "Martelo Ensandecido",
			'de-de': "Rasender Hammer"
		},

		effect: {
			'en-us': "If this Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			'it-it': "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "If this Pokémon squeezes the tongue of the Shellder biting it, the Shellder will launch a toxic liquid from the tip of its shell."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545551,
				tcgplayer: 234204
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545551,
				tcgplayer: 234204
			}
		},
	],
}

export default card
