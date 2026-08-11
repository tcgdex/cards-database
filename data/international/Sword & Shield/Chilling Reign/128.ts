import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Brazen Tail",
			'fr-fr': "Queue Effrontée",
			'es-es': "Cola Descarada",
			'it-it': "Coda Sfacciata",
			'pt-br': "Cauda Insolente",
			'de-de': "Dreister Schweif"
		},

		effect: {
			'en-us': "Energy attached to your Pokémon can't be put into your hand, deck, or discard pile by an effect of your opponent's Item or Supporter cards.",
			'fr-fr': "L'Énergie attachée à vos Pokémon ne peut pas être placée dans votre main, deck ou pile de défausse par les effets des cartes Objet ou Supporter de votre adversaire.",
			'es-es': "Las Energías unidas a tus Pokémon no pueden ponerse en tu mano, baraja o pila de descartes por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			'it-it': "Nessuna Energia assegnata ai tuoi Pokémon può essere aggiunta alla tua mano, al tuo mazzo o alla tua pila degli scarti per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			'pt-br': "Energias ligadas aos seus Pokémon não podem ser colocadas na sua mão, baralho ou pilha de descarte pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			'de-de': "An deine Pokémon angelegte Energien können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners auf deine Hand gegeben, in dein Deck oder auf deinen Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567236,
				tcgplayer: 241810
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567236,
				tcgplayer: 241810
			}
		},
	],
}

export default card
