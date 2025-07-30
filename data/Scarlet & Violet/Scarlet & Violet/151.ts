import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	rarity: "Common",
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
			pt: "Esconder no Ninho",
			de: "Nestreserve"
		},

		effect: {
			en: "Once during your turn, you may shuffle your hand and put it on the bottom of your deck. If you put any cards on the bottom of your deck in this way, draw a card.",
			fr: "Une fois pendant votre tour, vous pouvez mélanger votre main, puis la placer en dessous de votre deck. Si vous placez au moins une carte en dessous de votre deck de cette façon, piochez une carte.",
			es: "Una vez durante tu turno, puedes barajar las cartas de tu mano y ponerlas en la parte inferior de tu baraja. Si pones alguna carta en la parte inferior de tu baraja de esta manera, roba 1 carta.",
			it: "Una sola volta durante il tuo turno, puoi rimischiare le carte che hai in mano e metterle in fondo al tuo mazzo. Se hai messo delle carte in fondo al tuo mazzo in questo modo, pesca una carta.",
			pt: "Uma vez durante o seu turno, você poderá embaralhar a sua mão e colocá-la como as cartas de baixo do seu baralho. Se você colocou qualquer carta como a carta de baixo do seu baralho desta forma, compre uma carta.",
			de: "Einmal während deines Zuges kannst du deine Handkarten mischen und sie unter dein Deck legen. Wenn du auf diese Weise mindestens 1 Karte unter dein Deck gelegt hast, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "HYOGONOSUKE",

	thirdParty: {
		cardmarket: 702447
	}
}

export default card