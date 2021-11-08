import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic VMAX",
		en: "Rillaboom VMAX",
		es: "Rillaboom VMAX",
		it: "Rillaboom VMAX",
		pt: "Rillaboom VMAX",
		de: "Gortrom VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		fr: "Gorythmic-V",
		en: "Rillaboom V"
	},

	attacks: [{
		name: {
			fr: "Griffe",
			en: "Scratch",
			es: "Arañazo",
			it: "Graffio",
			pt: "Arranhão",
			de: "Kratzer"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Battromax",
			en: "Max Beating",
			es: "Maxipercusión",
			it: "Dynapercossa",
			pt: "Batidão Max",
			de: "Dyna-Schläge"
		},

		effect: {
			fr: "Vous pouvez défausser jusqu'à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
			es: "Puedes descartar hasta 3 Energías Grass de este Pokémon. Si lo haces, este ataque hace 50 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a tre Energie Grass da questo Pokémon. Se lo fai, questo attacco infligge 50 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 3 Energias Grass deste Pokémon. Se fizer isto, este ataque causará 50 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst bis zu 3 Grass-Energien von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, fügt diese Attacke für jede auf diese Weise abgelegte Karte 50 Schadenspunkte mehr zu."
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX"
}

export default card
