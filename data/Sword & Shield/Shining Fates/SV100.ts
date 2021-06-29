import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou",
		en: "Greedent",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Rongourmand",
		en: "Skwovet"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Queue Cupide",
			en: "Greedy Tail",
			es: "Cola Avaricia",
			it: "Coda Ingorda",
			pt: "Cauda Fominha",
			de: "Gieriger Schweif"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Outil Pokémon, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
			en: "Once during your turn, you may search your deck for a Pokémon Tool card, reveal it, and put it into your hand. Then, shuffle your deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Herramienta Pokémon, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Oggetto Pokémon, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Ferramenta Pokémon no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Pokémon-Ausrüstung durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Coup de Queue",
			en: "Tail Smack",
			es: "Bofetón Cola",
			it: "Codasberla",
			pt: "Ataque de Cauda",
			de: "Schweifschlag"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card