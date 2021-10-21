import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Galarian Darmanitan",
		fr: "Darumacho de Galar",
		es: "Darmanitan de Galar",
		it: "Darmanitan di Galar",
		pt: "Darmanitan de Galar",
		de: "Galar-Flampivian"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Galarian Darumaka",
		fr: "Darumarond de Galar",
		es: "Darumaka de Galar",
		it: "Darumaka di Galar",
		pt: "Darumaka de Galar",
		de: "Galar-Flampion"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
				es: "Golpe Cabeza",
				it: "Bottintesta",
				pt: "Cabeçada",
				de: "Kopfnuss"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Frozen Heat",
				fr: "Chaleur Gelée",
				es: "Calor Congelado",
				it: "Gelocalore",
				pt: "Calor Congelado",
				de: "Eisige Hitze"
			},
			effect: {
				en: "You may discard all Water Energy from this Pokémon. If you do, this attack does 60 more damage.",
				fr: "Vous pouvez défausser toute l'Énergie Water attachée à ce Pokémon. Dans ce cas, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Puedes descartar todas las Energías Water de este Pokémon. Si lo haces, este ataque hace 60 puntos de daño más.",
				it: "Puoi scartare tutte le Energie Water da questo Pokémon. Se lo fai, questo attacco infligge 60 danni in più.",
				pt: "Você pode descartar todas as Energias Water deste Pokémon. Se fizer isto, este ataque causará 60 pontos de dano a mais.",
				de: "Du kannst alle Water-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "110+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Anger has reignited its atrophied flame sac. This Pokémon spews fire everywhere as it rampages indiscriminately."
	}
}

export default card
