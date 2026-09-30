import { Card } from "../../../interfaces"
import Set from "../Play! Pokémon Prize Pack Series 03"

const card: Card = {
	set: Set,

	cameoDexIds: [493, 899, 900],

	name: {
		en: "Temple of Sinnoh",
		fr: "Temple de Sinnoh",
		es: "Templo de Sinnoh",
		it: "Tempio di Sinnoh",
		pt: "Templo de Sinnoh",
		de: "Sinnoh-Tempel"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.",
		fr: "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l'Énergie Colorless et n'ont aucun autre effet.",
		es: "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
		it: "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
		pt: "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
		de: "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern {C}-Energie und haben keinen anderen Effekt. Diese Karte bleibt im Spiel, wenn du sie spielst. Lege diese Karte ab, sobald eine weitere Stadionkarte ins Spiel kommt. Wenn eine andere Karte mit dem gleichen Namen im Spiel ist, kannst du diese Karte nicht spielen."
	},

	trainerType: "Stadium",
	regulationMark: "F",


	variants: [
		{
			type: "normal",
		},
	],
}

export default card
