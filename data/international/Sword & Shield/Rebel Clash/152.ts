import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Greedent",
		'fr-fr': "Rongrigou",
		'es-es': "Greedent",
		'it-it': "Greedent",
		'pt-br': "Greedent",
		'de-de': "Schlaraffel"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [820],
	set: Set,

	evolveFrom: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Greedy Tail",
				'fr-fr': "Queue Cupide",
				'es-es': "Cola Avaricia",
				'it-it': "Coda Ingorda",
				'pt-br': "Cauda Fominha",
				'de-de': "Gieriger Schweif"
			},
			effect: {
				'en-us': "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
				'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Ferramenta Pokémon no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifschlag"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458158,
				tcgplayer: 213252
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458158,
				tcgplayer: 213252
			}
		},
	],
}

export default card
