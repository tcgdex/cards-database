import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [820],
	set: Set,

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Greedy Tail",
				fr: "Queue Cupide",
				es: "Cola Avaricia",
				it: "Coda Ingorda",
				pt: "Cauda Fominha",
				de: "Gieriger Schweif"
			},
			effect: {
				en: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Ferramenta Pokémon no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
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
				en: "Tail Smack",
				fr: "Coup de Queue",
				es: "Bofetón Cola",
				it: "Codasberla",
				pt: "Ataque de Cauda",
				de: "Schweifschlag"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss."
	}
}

export default card
