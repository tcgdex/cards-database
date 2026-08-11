import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [700],
	set: Set,

	name: {
		'fr-fr': "Nymphali V",
		'de-de': "Feelinara V",
		'es-es': "Sylveon V",
		'pt-br': "Sylveon V",
		'it-it': "Sylveon V",
		'en-us': "Sylveon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cadeau Rêvé",
			'de-de': "Traumgeschenk",
			'es-es': "Regalo de Ensueño",
			'pt-br': "Presente Onírico",
			'it-it': "Dono Onirico",
			'en-us': "Dream Gift"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Objet, la montrer, puis l'ajouter à votre main. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Itemkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Objeto, enseñarla y ponerla en tu mano. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Item no seu baralho, revelá-la e colocá-la na sua mão. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Strumento, mostrarla e aggiungerla alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'en-us': "Once during your turn, you may search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck. If you use this Ability, your turn ends."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup Magique",
			'de-de': "Magischer Schuss",
			'es-es': "Disparo Mágico",
			'pt-br': "Tiro Mágico",
			'it-it': "Magicolpo",
			'en-us': "Magical Shot"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 609461
	}
}

export default card
