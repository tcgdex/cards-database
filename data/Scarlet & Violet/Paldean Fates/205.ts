import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Nest Stash",
			fr: "Cache Nichée",
			es: "Nido de Provisiones",
			it: "Tanascorta",
			pt: "Esconder no Ninho"
		},

		effect: {
			en: "Once during your turn, you may shuffle your hand and put it on the bottom of your deck. If you put any cards on the bottom of your deck in this way, draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez mélanger votre main, puis la placer en dessous de votre deck. Si vous placez au moins une carte en dessous de votre deck de cette façon, piochez une carte.",
			es: "Una vez durante tu turno, puedes barajar las cartas de tu mano y ponerlas en la parte inferior de tu baraja. Si pones alguna carta en la parte inferior de tu baraja de esta manera, roba 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi rimischiare le carte che hai in mano e metterle in fondo al tuo mazzo. Se hai messo delle carte in fondo al tuo mazzo in questo modo, pesca una carta.",
			pt: "Uma vez durante o seu turno, você poderá embaralhar a sua mão e colocá-la como as cartas de baixo do seu baralho. Se você colocou qualquer carta como a carta de baixo do seu baralho desta forma, compre uma carta."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card