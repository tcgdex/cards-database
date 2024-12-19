import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Magneton",
		fr: "Magnéton",
		es: "Magneton",
		it: "Magneton",
		pt: "Magneton",
		de: "Magneton"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Overvolt Discharge",
			fr: "Décharge Survoltée",
			es: "Descarga Sobretensión",
			it: "Scarica di Sovratensione",
			pt: "Descarga Supervoltaica",
			de: "Hochspannungsentladung"
		},

		effect: {
			en: "Once during your turn, you may attach up to 3 Basic Energy cards from your discard pile to your Lightning Pokémon in any way you like. If you use this Ability, this Pokémon is Knocked Out.",
			fr: "Une fois pendant votre tour, vous pouvez attacher jusqu'à 3 cartes Énergie de base de votre pile de défausse à vos Pokémon Lightning, comme il vous plaît. Si vous utilisez ce talent, ce Pokémon est mis K.O.",
			es: "Una vez durante tu turno, puedes unir hasta 3 cartas de Energía Básica de tu pila de descartes a tus Pokémon Lightning de la manera que desees. Si usas esta habilidad, este Pokémon queda Fuera de Combate.",
			it: "Una sola volta durante il tuo turno, puoi assegnare ai tuoi Pokémon Lightning fino a tre carte Energia base dalla tua pila degli scarti nel modo che preferisci. Se usi questa abilità, questo Pokémon viene messo KO.",
			pt: "Uma vez durante o seu turno, você poderá ligar até 3 cartas de Energia Básica da sua pilha de descarte aos seus Pokémon Lightning como desejar. Se você usar esta Habilidade, este Pokémon será Nocauteado.",
			de: "Einmal während deines Zuges kannst du bis zu 3 Basis-Energiekarten aus deinem Ablagestapel beliebig an deine Lightning-Pokémon anlegen. Wenn du diese Fähigkeit einsetzt, ist dieses Pokémon kampfunfähig."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
			es: "Bola Eléctrica",
			it: "Lamposfera",
			pt: "Bola de Eletricidade",
			de: "Stromball"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "H",

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	}
}

export default card