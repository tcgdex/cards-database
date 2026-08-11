import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [224],
	set: Set,

	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'es-es': "Octillery",
		'it-it': "Octillery",
		'pt-br': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid",
		'es-es': "Remoraid",
		'it-it': "Remoraid",
		'pt-br': "Remoraid",
		'de-de': "Remoraid"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Rapid Strike Search",
			'fr-fr': "Recherche à Mille Poings",
			'es-es': "Búsqueda de Golpe Fluido",
			'it-it': "Ricerca Colpo Rapido",
			'pt-br': "Busca Golpe Fluido",
			'de-de': "Fließender-Angriff-Suche"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can't use more than 1 Rapid Strike Search Ability each turn.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Mille Poings, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu'un talent Recherche à Mille Poings par tour.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Golpe Fluido, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de 1 habilidad Búsqueda de Golpe Fluido en cada turno.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Colpo Rapido, mostrarla e aggiungerla alle carte che hai mano. Poi rimischia le carte del tuo mazzo. Puoi usare l'abilità Ricerca Colpo Rapido solo una volta per turno.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta Golpe Fluido no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Busca Golpe Fluido por turno.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Fließender-Angriff-Karte durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Fließender-Angriff-Suche nur einmal pro Zug einsetzen."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Waterfall",
			'fr-fr': "Cascade",
			'es-es': "Cascada",
			'it-it': "Cascata",
			'pt-br': "Cachoeira",
			'de-de': "Kaskade"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	description: {
		'en-us': "It traps enemies with its suction-cupped tentacles, then smashes them with its rock-hard head.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608735,
				tcgplayer: 264212
			}
		},
	],
}

export default card
