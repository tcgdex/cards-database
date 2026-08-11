import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [686],
	set: Set,

	name: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mischievous Tentacles",
			'fr-fr': "Tentacules Malicieux",
			'es-es': "Tentáculos Traviesos",
			'it-it': "Monelleria Tentacolare",
			'pt-br': "Tentáculos Maliciosos",
			'de-de': "Freche Tentakel"
		},

		effect: {
			'en-us': "Look at the top card of your opponent's deck. You may have your opponent shuffle their deck.",
			'fr-fr': "Regardez la carte du dessus du deck de votre adversaire. Vous pouvez demander à votre adversaire de mélanger son deck.",
			'es-es': "Mira la primera carta de la baraja de tu rival. Puedes hacer que tu rival baraje las cartas de su baraja.",
			'it-it': "Guarda la prima carta del mazzo del tuo avversario. Puoi far rimischiare al tuo avversario il suo mazzo.",
			'pt-br': "Olhe a carta de cima do baralho do seu oponente. Você pode fazer com que o seu oponente embaralhe o baralho dele.",
			'de-de': "Schau dir die oberste Karte des Decks deines Gegners an. Du kannst deinen Gegner dazu veranlassen, sein Deck zu mischen."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Mori Yuu",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780928,
				tcgplayer: 560343
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780928,
				tcgplayer: 560343
			}
		},
	],
}

export default card
