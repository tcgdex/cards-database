import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [724],
	set: Set,

	name: {
		'en-us': "Decidueye",
		'fr-fr': "Archéduc",
		'es-es': "Decidueye",
		'it-it': "Decidueye",
		'pt-br': "Decidueye",
		'de-de': "Silvarro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dartrix",
		'fr-fr': "Efflèche",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stock Up on Feathers",
			'fr-fr': "Réserve de Plumes",
			'es-es': "Acopio de Plumas",
			'it-it': "Scorta di Piume",
			'pt-br': "Estoque de Penas",
			'de-de': "Federvorrat"
		},

		effect: {
			'en-us': "Draw cards until you have 7 cards in your hand.",
			'fr-fr': "Piochez des cartes jusqu'à en avoir 7 en main.",
			'es-es': "Roba cartas hasta que tengas 7 cartas en tu mano.",
			'it-it': "Pesca fino ad avere sette carte in mano.",
			'pt-br': "Compre cartas até ter 7 cartas na sua mão.",
			'de-de': "Ziehe so lange Karten, bis du 7 Karten auf deiner Hand hast."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Power Shot",
			'fr-fr': "Tir Puissant",
			'es-es': "Disparo Poderoso",
			'it-it': "Forzatiro",
			'pt-br': "Disparo Poderoso",
			'de-de': "Powersalve"
		},

		effect: {
			'en-us': "Discard a Basic {G} Energy card from your hand. If you can't, this attack does nothing.",
			'fr-fr': "Défaussez une carte Énergie {G} de base de votre main. Si vous ne le pouvez pas, cette attaque ne fait rien.",
			'es-es': "Descarta 1 carta de Energía {G} Básica de tu mano. Si no puedes, este ataque no hace nada.",
			'it-it': "Scarta una carta Energia base {G} che hai in mano. Se non puoi, questo attacco non ha effetto.",
			'pt-br': "Descarte uma carta de Energia {G} Básica da sua mão. Se não puder fazer isto, este ataque não fará nada.",
			'de-de': "Lege 1 Basis-{G}-Energiekarte aus deiner Hand auf deinen Ablagestapel. Wenn du das nicht machen kannst, hat diese Attacke keine Auswirkungen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",


	illustrator: "DOM",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780893,
				tcgplayer: 560315
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780893,
				tcgplayer: 560315
			}
		},
	],
}

export default card
