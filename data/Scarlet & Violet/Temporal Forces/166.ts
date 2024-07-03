import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [586],
	set: Set,

	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Changing Seasons",
			fr: "Changement de Saison",
			es: "Cambio de Estaciones",
			it: "Alternastagioni",
			pt: "Mudança de Estações",
			de: "Wechsel der Jahreszeiten"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Stade, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Estadio, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Stadio, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá procurar por uma carta de Estádio no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Stadionkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Superpowered Horns",
			fr: "Cornes Surpuissantes",
			es: "Cuernos Superpoderosos",
			it: "Corna Superpotenziate",
			pt: "Chifres Superpoderosos",
			de: "Superstarke Hörner"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card