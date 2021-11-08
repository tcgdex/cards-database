import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Scrounge",
			fr: "Fouissage",
			es: "Rebuscar",
			it: "Sbafo",
			pt: "Vasculhada",
			de: "Abstauben"
		},

		effect: {
			en: "Put a Pokémon Tool card from your discard pile into your hand.",
			fr: "Ajoutez une carte Outil Pokémon de votre pile de défausse à votre main.",
			es: "Pon 1 carta de Herramienta Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi una carta Oggetto Pokémon dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			pt: "Coloque uma carta de Ferramenta Pokémon da sua pilha de descarte na sua mão.",
			de: "Nimm 1 Pokémon-Ausrüstung aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It eats berries nonstop—a habit that has made it more resilient than it looks. It'll show up on farms, searching for yet more berries."
	}
}

export default card
