import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Temple of Sinnoh",
		fr: "Temple de Sinnoh",
		es: "Templo de Sinnoh",
		it: "Tempio di Sinnoh",
		pt: "Templo de Sinnoh",
		de: "Sinnoh-Tempel"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.",
		fr: "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l'Énergie Colorless et n'ont aucun autre effet.",
		es: "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
		it: "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
		pt: "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
		de: "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern Colorless-Energie und haben keinen anderen Effekt."
	},

	trainerType: "Stadium",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card