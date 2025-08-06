import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Rillaboom VMAX",
		fr: "Gorythmic VMAX",
		es: "Rillaboom VMAX",
		it: "Rillaboom VMAX",
		pt: "Rillaboom VMAX",
		de: "Gortrom VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,
	hp: 330,

	evolveFrom: {
		en: "Rillaboom V",
		fr: "Gorythmic-V",
		es: "Rillaboom V",
		it: "Rillaboom-V",
		pt: "Rillaboom V",
		de: "Gortrom-V"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Max Beating",
				fr: "Battromax",
				es: "Maxipercusión",
				it: "Dynapercossa",
				pt: "Batidão Max",
				de: "Dyna-Schläge"
			},
			effect: {
				en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
				fr: "Vous pouvez défausser jusqu'à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
				es: "Puedes descartar hasta 3 Energías Grass de este Pokémon. Si lo haces, este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
				it: "Puoi scartare fino a tre Energie Grass da questo Pokémon. Se lo fai, questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
				pt: "Você pode descartar até 3 Energias Grass deste Pokémon. Se fizer isto, este ataque causará 50 pontos de dano a mais para cada carta descartada desta forma.",
				de: "Du kannst bis zu 3 Grass-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke für jede auf diese Weise abgelegte Karte 50 Schadenspunkte mehr zu."
			},
			damage: "130+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

	thirdParty: {
		cardmarket: 456408,
		tcgplayer: 213089
	}
}

export default card
