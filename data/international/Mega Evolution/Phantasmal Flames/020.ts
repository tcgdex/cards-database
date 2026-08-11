import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ceruledge",
		'fr-fr': "Malvalame",
		'es-es': "Ceruledge",
		'es-mx': "Ceruledge",
		'de-de': "Azugladis",
		'it-it': "Ceruledge",
		'pt-br': "Ceruledge"
	},

	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'es-mx': "Charcadet",
		'de-de': "Knarbon",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [937],
	hp: 140,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Infernal Slash",
			'fr-fr': "Tranche Infernale",
			'es-es': "Tajo Infernal",
			'es-mx': "Cuchillada Infernal",
			'de-de': "Infernalischer Schlitzer",
			'it-it': "Lacerazione Infernale",
			'pt-br': "Talho Infernal"
		},

		effect: {
			'en-us': "Discard 4 Basic {R} Energy cards from your hand. If you can't discard 4 cards in this way, this attack does nothing.",
			'fr-fr': "Défaussez 4 cartes Énergie {R} de base de votre main. Si vous ne pouvez pas défausser 4 cartes de cette façon, cette attaque ne fait rien.",
			'es-es': "Descarta 4 cartas de Energía {R} Básica de tu mano. Si no puedes descartar 4 cartas de esta manera, este ataque no hace nada.",
			'es-mx': "Descarta 4 cartas de Energía {R} Básica de tu mano. Si no puedes descartar 4 cartas de esta manera, este ataque no hace nada.",
			'de-de': "Lege 4 Basis-{R}-Energiekarten aus deiner Hand auf deinen Ablagestapel. Wenn du auf diese Weise nicht 4 Karten auf deinen Ablagestapel legen kannst, hat diese Attacke keine Auswirkungen.",
			'it-it': "Scarta quattro carte Energia base {R} che hai in mano. Se non puoi scartare quattro carte in questo modo, questo attacco non ha effetto.",
			'pt-br': "Descarte 4 cartas de Energia {R} Básica da sua mão. Se você não puder descartar 4 cartas desta forma, este ataque não fará nada."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",
	},

	illustrator: "Gemi",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857595,
				tcgplayer: 662141,
				cardtrader: 356803
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857595,
				tcgplayer: 662141,
				cardtrader: 356803
			}
		},
	],	
}

export default card
