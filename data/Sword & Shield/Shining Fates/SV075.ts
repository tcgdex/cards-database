import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dolman",
		en: "Stonjourner",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Ultimawashi",
			en: "Mega Kick",
			es: "Megapatada",
			it: "Megacalcio",
			pt: "Megachute",
			de: "Megakick"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Étau Puissant",
			en: "Power Press",
			es: "Constricción Poderosa",
			it: "Vigorstretta",
			pt: "Compressão Poderosa",
			de: "Powerdruck"
		},

		effect: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires.",
			en: "If this Pokémon has at least 1 extra Energy attached (in addition to this attack’s cost), this attack does 60 more damage.",
			es: "Si este Pokémon tiene por lo menos 1 Energía adicional unida a él (además de las del coste de este ataque), este ataque hace 60 puntos de daño más.",
			it: "Se questo Pokémon ha almeno un’Energia extra assegnata, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 60 danni in più.",
			pt: "Se este Pokémon tiver pelo menos 1 Energia adicional ligada a ele (além do custo deste ataque), este ataque causará 60 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 extra Energie angelegt ist (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card