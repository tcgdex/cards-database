import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		fr: "Persian",
		en: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Appel Rocket",
			en: "Rocket Call",
			es: "Llamar al Rocket",
			it: "Chiamata Rocket",
			pt: "Chamado Rocket",
			de: "Rocket-Ruf"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Charisme de Giovanni, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			en: "Once during your turn, you may search your deck for a Giovanni's Charisma card, reveal it, and put it into your hand. Then, shuffle your deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Carisma de Giovanni, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Carisma di Giovanni, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta Carisma do Giovanni no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Giovannis Charisma-Karte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Tranche",
			en: "Slash",
			es: "Cuchillada",
			it: "Lacerazione",
			pt: "Talho",
			de: "Schlitzer"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card