import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Breeder",
		fr: "Éleveur de Pokémon",
		de: "Pokémon-Züchter",
		it: "Allevatore di Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte Évolution de Niveau 2 de votre main sur le Pokémon de base correspondant. Vous ne pouvez jouer cette carte que quand il vous serait possible de faire évoluer ce Pokémon de toute façon.",
		de: "Lege eine Evolutionskarte der Phase 2 aus Deiner Hand auf das entsprechende Basis-Pokémon. Du kannst diese Karte jedoch nur spielen, wenn Du dieses Pokémon ohnehin weiterentwickeln darfst.",
		it: "Metti una carta Evoluzione di Fase 2 che hai in mano direttamente sul Pokémon Base corrispondente. Puoi giocare questa carta solo quando ti sarebbe comunque permesso evolvere quel Pokémon.",
	},

	thirdParty: {
		cardmarket: 273771
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/094.ts"
		}
	]
}

export default card
