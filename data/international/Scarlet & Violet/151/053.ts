import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		'fr-fr': "Persian",
		'en-us': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Miaouss",
		'en-us': "Meowth",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Appel Rocket",
			'en-us': "Rocket Call",
			'es-es': "Llamar al Rocket",
			'it-it': "Chiamata Rocket",
			'pt-br': "Chamado Rocket",
			'de-de': "Rocket-Ruf"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Charisme de Giovanni, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'en-us': "Once during your turn, you may search your deck for a Giovanni's Charisma card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Carisma de Giovanni, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Carisma di Giovanni, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por uma carta Carisma do Giovanni no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Giovannis Charisma-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Tranche",
			'en-us': "Slash",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Talho",
			'de-de': "Schlitzer"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733648,
				tcgplayer: 516223,
				cardtrader: 261203
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733648,
				tcgplayer: 516223,
				cardtrader: 261203
			}
		},
	],

	illustrator: "Naoki Saito",

	
}

export default card
