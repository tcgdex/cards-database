import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Echoing Madness",
			'fr-fr': "Folie Résonnante",
			'es-es': "Locura Resonante",
			'it-it': "Follia Echeggiante",
			'pt-br': "Loucura Ecoante",
			'de-de': "Widerhallender Wahn"
		},

		effect: {
			'en-us': "Choose Item cards or Supporter cards. During your opponent's next turn, they can't play any of the chosen cards from their hand.",
			'fr-fr': "Choisissez entre cartes Objet ou cartes Supporter. Pendant son prochain tour, votre adversaire ne peut jouer de sa main aucune des cartes de la catégorie que vous avez choisie.",
			'es-es': "Elige entre cartas de Objeto y cartas de Partidario. Durante el próximo turno de tu rival, este no puede jugar de su mano ninguna carta de la opción elegida.",
			'it-it': "Scegli tra carte Strumento e carte Aiuto. Durante il suo prossimo turno, il tuo avversario non può giocare le carte che hai scelto dalla sua mano.",
			'pt-br': "Escolha entre cartas de Item ou cartas de Apoiador. Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma destas cartas escolhidas da mão dele.",
			'de-de': "Wähle Itemkarten oder Unterstützerkarten. Während des nächsten Zuges deines Gegners kann er keine der gewählten Karten aus seiner Hand spielen."
		},

		damage: 50
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon flaps its four wings skillfully. Crobat can fly through cramped caves without needing to slow down.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740630,
				tcgplayer: 523786,
				cardtrader: 265225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740630,
				tcgplayer: 523786,
				cardtrader: 265225
			}
		},
	],

	illustrator: "Uta",

	
}

export default card
