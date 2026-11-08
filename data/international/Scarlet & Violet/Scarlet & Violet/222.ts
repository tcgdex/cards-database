import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Nest Stash",
			'fr-fr': "Cache Nichée",
			'es-es': "Nido de Provisiones",
			'it-it': "Tanascorta",
			'pt-br': "Esconder no Ninho",
			'de-de': "Nestreserve"
		},

		effect: {
			'en-us': "Once during your turn, you may shuffle your hand and put it on the bottom of your deck. If you put any cards on the bottom of your deck in this way, draw a card.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez mélanger votre main, puis la placer en dessous de votre deck. Si vous placez au moins une carte en dessous de votre deck de cette façon, piochez une carte.",
			'es-es': "Una vez durante tu turno, puedes barajar las cartas de tu mano y ponerlas en la parte inferior de tu baraja. Si pones alguna carta en la parte inferior de tu baraja de esta manera, roba 1 carta.",
			'it-it': "Una sola volta durante il tuo turno, puoi rimischiare le carte che hai in mano e metterle in fondo al tuo mazzo. Se hai messo delle carte in fondo al tuo mazzo in questo modo, pesca una carta.",
			'pt-br': "Uma vez durante o seu turno, você poderá embaralhar a sua mão e colocá-la como as cartas de baixo do seu baralho. Se você colocou qualquer carta como a carta de baixo do seu baralho desta forma, compre uma carta.",
			'de-de': "Einmal während deines Zuges kannst du deine Handkarten mischen und sie unter dein Deck legen. Wenn du auf diese Weise mindestens 1 Karte unter dein Deck gelegt hast, ziehe 1 Karte."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	illustrator: "Teeziro",

	description: {
		'en-us': "No matter how much it stuffs its belly with food, it is always anxious about getting hungry again. So, it stashes berries in its cheeks and tail.",
	},

	thirdParty: {
        cardmarket: 702518,
        tcgplayer: 490080
    }
}

export default card