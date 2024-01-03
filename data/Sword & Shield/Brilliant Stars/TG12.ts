import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Oranguru",
		fr: "Gouroutan",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Primate Wisdom",
			fr: "Sagesse du Primate",
			es: "Sabiduría Primate",
			it: "Saggezza del Primate",
			pt: "Sabedoria de Primata",
			de: "Primaten-Weisheit"
		},

		effect: {
			en: "Once during your turn, you may switch a card from your hand with the top card of your deck.",
			fr: "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
			es: "Una vez durante tu turno, puedes cambiar 1 carta de tu mano por la primera carta de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi scambiare una carta che hai in mano con la prima carta del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá trocar 1 carta da sua mão pela carta de cima do seu baralho.",
			de: "Einmal während deines Zuges kannst du 1 Karte aus deiner Hand gegen die oberste Karte deines Decks austauschen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Whap Down",
			fr: "Assommer",
			es: "Zurrar",
			it: "Bastonata",
			pt: "Golpe Ligeiro",
			de: "Verdreschen"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "D",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card