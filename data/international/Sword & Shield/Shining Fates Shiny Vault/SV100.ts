import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'fr-fr': "Rongrigou",
		'en-us': "Greedent",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'fr-fr': "Rongourmand",
		'en-us': "Skwovet"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Queue Cupide",
			'en-us': "Greedy Tail",
			'es-es': "Cola Avaricia",
			'it-it': "Coda Ingorda",
			'pt-br': "Cauda Fominha",
			'de-de': "Gieriger Schweif"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			'en-us': "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Ferramenta Pokémon no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Coup de Queue",
			'en-us': "Tail Smack",
			'es-es': "Bofetón Cola",
			'it-it': "Codasberla",
			'pt-br': "Ataque de Cauda",
			'de-de': "Schweifschlag"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539888,
				tcgplayer: 232488
			}
		},
	],
}

export default card
