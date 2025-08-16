import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		en: "Sylveon V",
		fr: "Nymphali V",
		es: "Sylveon V",
		it: "Sylveon V",
		pt: "Sylveon V",
		de: "Feelinara V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dream Gift",
			fr: "Cadeau Rêvé",
			es: "Regalo de Ensueño",
			it: "Dono Onirico",
			pt: "Presente Onírico",
			de: "Traumgeschenk"
		},

		effect: {
			en: "Once during your turn, you may search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If you use this Ability, your turn ends.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Objet, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Objeto, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Strumento, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			pt: "Uma vez durante o seu turno, você poderá procurar por 1 carta de Item no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Itemkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608746
	}
}

export default card