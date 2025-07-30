import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowbro",
		fr: "Flagadoss de Galar",
		es: "Slowbro de Galar",
		it: "Slowbro di Galar",
		pt: "Slowbro de Galar",
		de: "Galar-Lahmus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar",
		es: "Slowpoke de Galar",
		it: "Slowpoke di Galar",
		pt: "Slowpoke de Galar",
		de: "Galar-Flegmon"
	},

	attacks: [{
		name: {
			en: "Splattering Poison",
			fr: "Poison Éclaboussant",
			es: "Veneno Salpicante",
			it: "Spruzzata di Veleno",
			pt: "Respingar Veneno",
			de: "Giftgespritze"
		},

		effect: {
			en: "Both Active Pokémon are now Poisoned.",
			fr: "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			es: "Ambos Pokémon Activos pasan a estar Envenenados.",
			it: "Entrambi i Pokémon attivi vengono avvelenati.",
			pt: "Ambos os Pokémon Ativos agora estão Envenenados.",
			de: "Beide Aktiven Pokémon sind jetzt vergiftet."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Unhinged Hammer",
			fr: "Marteau Dérangé",
			es: "Martillo Desquiciado",
			it: "Martello Scatenato",
			pt: "Martelo Ensandecido",
			de: "Rasender Hammer"
		},

		effect: {
			en: "If this Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			fr: "Si ce Pokémon est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dieses Pokémon von einem Speziellen Zustand betroffen ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "If this Pokémon squeezes the tongue of the Shellder biting it, the Shellder will launch a toxic liquid from the tip of its shell."
	},

	thirdParty: {
		cardmarket: 545551
	}
}

export default card