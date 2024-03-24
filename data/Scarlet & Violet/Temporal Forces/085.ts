import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		pt: "Drilbur"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Dig Dig Dig",
			fr: "Triple Creusement",
			es: "Cava que te Cava",
			it: "Scava a Fondo",
			pt: "Cavar Cavar Cavar"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 3 Basic Fighting Energy cards and discard them. Then, shuffle your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 3 cartes Énergie Fighting de base et les défausser. Mélangez ensuite votre deck.",
			es: "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 3 cartas de Energía Fighting Básica y descartarlas. Después, baraja las cartas de tu baraja.",
			it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a tre carte Energia base Fighting e scartarle. Poi rimischia le carte del tuo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 3 cartas de Energia Fighting Básica no seu baralho e descartá-las. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
			es: "Rociado de Arena",
			it: "Silicospruzzo",
			pt: "Spray de Areia"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card