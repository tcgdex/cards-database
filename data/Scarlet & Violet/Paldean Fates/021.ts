import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [171],
	set: Set,

	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn",
		de: "Lanturn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
		es: "Chinchou",
		it: "Chinchou",
		pt: "Chinchou",
		de: "Lampi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios",
			de: "Kugelblitz"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Aqua Spark",
			fr: "Aqua-Étincelle",
			es: "Chispa Aqua",
			it: "Acquascintilla",
			pt: "Faísca de Água",
			de: "Aquafunke"
		},

		effect: {
			en: "If this Pokémon has any {W} Energy attached, this attack does 120 more damage.",
			fr: "Si au moins une Énergie {W} est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía {W} unida, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie {W} assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia {W} ligada a ele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 {W}-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aspara",

	thirdParty: {
		cardmarket: 751551
	}
}

export default card