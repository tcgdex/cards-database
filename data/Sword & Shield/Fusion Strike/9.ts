import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [540],
	set: Set,

	name: {
		en: "Sewaddle",
		fr: "Larveyette",
		es: "Sewaddle",
		it: "Sewaddle",
		pt: "Sewaddle",
		de: "Strawickl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		en: "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Grass Munch",
			fr: "Plantivore",
			de: "Grasmampfer",
			es: "Mascaplantas",
			pt: "Papa-grama",
			it: "Sgranocchiaerba"
		},

		damage: 10,

		effect: {
			en: "Discard a {G} Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie {G} du Pokémon Actif de votre adversaire.",
			de: "Lege 1 {G}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía {G} del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia {G} do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia {G} dal Pokémon attivo del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582037
	}
}

export default card