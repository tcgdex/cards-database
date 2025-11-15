import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Ceruledge",
		fr: "Malvalame",
		es: "Ceruledge",
		'es-mx': "Ceruledge",
		de: "Azugladis",
		it: "Ceruledge",
		pt: "Ceruledge"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Infernal Slash",
			fr: "Tranche Infernale",
			es: "Tajo Infernal",
			'es-mx': "Cuchillada Infernal",
			de: "Infernalischer Schlitzer",
			it: "Lacerazione Infernale",
			pt: "Talho Infernal"
		},

		effect: {
			en: "Discard 4 Basic {R} Energy cards from your hand. If you can't discard 4 cards in this way, this attack does nothing.",
			fr: "Défaussez 4 cartes Énergie {R} de base de votre main. Si vous ne pouvez pas défausser 4 cartes de cette façon, cette attaque ne fait rien.",
			es: "Descarta 4 cartas de Energía {R} Básica de tu mano. Si no puedes descartar 4 cartas de esta manera, este ataque no hace nada.",
			'es-mx': "Descarta 4 cartas de Energía {R} Básica de tu mano. Si no puedes descartar 4 cartas de esta manera, este ataque no hace nada.",
			de: "Lege 4 Basis-{R}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise nicht 4 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			it: "Scarta quattro carte Energia base {R} che hai in mano. Se non puoi scartare quattro carte in questo modo, questo attacco non ha effetto.",
			pt: "Descarte 4 cartas de Energia {R} Básica da sua mão. Se você não puder descartar 4 cartas desta forma, este ataque não fará nada."
		},

		damage: 220
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card