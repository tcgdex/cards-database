import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Tyrunt",
		fr: "Ptyranidur",
		es: "Tyrunt",
		de: "Balgoras",
		it: "Tyrunt",
		pt: "Tyrunt"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		696
	],
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Antique Jaw Fossil",
		fr: "Fossile Mâchoire Ancien",
		es: "Fósil Mandíbula Antiguo",
		de: "Antikes Kieferfossil",
		it: "Vecchio Fossilmascella",
		pt: "Fóssil de Mandíbula Arcaico"
	},
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless"
			],
			name: {
				en: "Get Angry",
				fr: "Coléreux",
				es: "Enfadarse",
				de: "Rotsehen",
				it: "Tutte le Furie",
				pt: "Dar Piti"
			},
			damage: "20×",
			effect: {
				en: "This attack does 20 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
				de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
				it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "J",
	illustrator: "Tomoki Sone",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684358,
		cardmarket: 877458
	}
}

export default card
