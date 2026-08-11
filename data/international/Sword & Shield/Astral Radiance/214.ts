import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Temple of Sinnoh",
		'fr-fr': "Temple de Sinnoh",
		'es-es': "Templo de Sinnoh",
		'it-it': "Tempio di Sinnoh",
		'pt-br': "Templo de Sinnoh",
		'de-de': "Sinnoh-Tempel"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.",
		'fr-fr': "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l'Énergie Colorless et n'ont aucun autre effet.",
		'es-es': "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
		'it-it': "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
		'pt-br': "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
		'de-de': "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern Colorless-Energie und haben keinen anderen Effekt."
	},

	trainerType: "Stadium",
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 658875,
				tcgplayer: 272469
			}
		},
	],
}

export default card
