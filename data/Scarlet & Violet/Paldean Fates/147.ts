import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		en: "Wigglytuff",
		fr: "Grodoudou",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Balloon Therapy",
			fr: "Thérapie Bouboule",
			es: "Terapia Globo",
			it: "Terapia Pallone",
			pt: "Terapia de Balão",
			de: "Ballontherapie"
		},

		effect: {
			en: "Once during your turn, you may attach a Therapeutic Energy card from your hand to 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Thérapeutique de votre main à l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Terapéutica de tu mano a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Terapeutica dalla tua mano.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta Energia Terapêutica da sua mão a 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Therapie-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kagemaru Himeno",

	thirdParty: {
		cardmarket: 751686
	}
}

export default card