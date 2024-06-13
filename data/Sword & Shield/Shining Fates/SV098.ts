import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		fr: "Gouroutan",
		en: "Oranguru",
		es: "Oranguru",
		it: "Oranguru",
		pt: "Oranguru",
		de: "Kommandutan"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Sagesse du Primate",
			en: "Primate Wisdom",
			es: "Sabiduría Primate",
			it: "Saggezza del Primate",
			pt: "Sabedoria de Primata",
			de: "Primaten-Weisheit"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
			en: "Once during your turn, you may switch a card from your hand with the top card of your deck.",
			es: "Una vez durante tu turno, puedes cambiar 1 carta de tu mano por la primera carta de tu baraja.",
			it: "Una sola volta durante il tuo turno, puoi scambiare una carta che hai in mano con la prima carta del tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá trocar 1 carta da sua mão pela carta de cima do seu baralho.",
			de: "Einmal während deines Zuges kannst du 1 Karte aus deiner Hand gegen die oberste Karte deines Decks austauschen."
		}
	}],

	attacks: [{
		name: {
			fr: "Assommer",
			en: "Whap Down",
			es: "Zurrar",
			it: "Bastonata",
			pt: "Golpe Ligeiro",
			de: "Verdreschen"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "It knows the forest inside and out. If it comes across a wounded Pokémon, Oranguru will gather medicinal herbs to treat it."
	}
}

export default card