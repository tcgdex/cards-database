import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [611],
	set: Set,

	name: {
		'en-us': "Fraxure",
		'fr-fr': "Incisache",
		'es-es': "Fraxure",
		'it-it': "Fraxure",
		'pt-br': "Fraxure",
		'de-de': "Sharfax"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	evolveFrom: {
		'en-us': "Axew",
		'fr-fr': "Coupenotte",
		'es-es': "Axew",
		'it-it': "Axew",
		'pt-br': "Axew",
		'de-de': "Milza"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Unnerve",
			'fr-fr': "Tension",
			'es-es': "Nerviosismo",
			'it-it': "Agitazione",
			'pt-br': "Enervar",
			'de-de': "Anspannung"
		},

		effect: {
			'en-us': "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
			'es-es': "Cada vez que tu rival juegue una carta de Objeto o de Partidario de su mano, se evitan todos los efectos de esa carta infligidos a este Pokémon.",
			'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
			'pt-br': "Sempre que seu oponente jogar uma carta de Item ou de Apoiador da mão dele, previna todos os efeitos daquela carta causados a este Pokémon.",
			'de-de': "Verhindere jedes Mal, wenn dein Gegner 1 Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Metal"],

		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão",
			'de-de': "Drachenpuls"
		},

		effect: {
			'en-us': "Discard the top card of your deck.",
			'fr-fr': "Défaussez la carte du dessus de votre deck.",
			'es-es': "Descarta la primera carta de tu baraja.",
			'it-it': "Scarta la prima carta del tuo mazzo.",
			'pt-br': "Descarte a carta de cima do seu baralho.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "H",


	illustrator: "Uninori",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780941,
				tcgplayer: 560355
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780941,
				tcgplayer: 560355
			}
		},
	],
}

export default card
