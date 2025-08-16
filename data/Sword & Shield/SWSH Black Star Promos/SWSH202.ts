import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		fr: "Nymphali V",
		de: "Feelinara V",
		es: "Sylveon V",
		pt: "Sylveon V",
		it: "Sylveon V",
		en: "Sylveon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cadeau Rêvé",
			de: "Traumgeschenk",
			es: "Regalo de Ensueño",
			pt: "Presente Onírico",
			it: "Dono Onirico",
			en: "Dream Gift"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Objet, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Itemkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Objeto, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Item no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Strumento, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			en: "Once during your turn, you may search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If you use this Ability, your turn ends."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Coup Magique",
			de: "Magischer Schuss",
			es: "Disparo Mágico",
			pt: "Tiro Mágico",
			it: "Magicolpo",
			en: "Magical Shot"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 609461
	}
}

export default card