import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [477],
	set: Set,

	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Spectral Breach",
			fr: "Brèche Spectrale",
			es: "Brecha Espectral",
			it: "Breccia Spettrale",
			pt: "Brecha Espectral",
			de: "Spektralbruch"
		},

		effect: {
			en: "All Special Energy attached to Pokémon (both yours and your opponent's) provide Colorless Energy and have no other effect.",
			fr: "Toutes les Énergies spéciales attachées aux Pokémon (les vôtres et ceux de votre adversaire) fournissent de l'Énergie Colorless et n'ont aucun autre effet.",
			es: "Todas las Energías Especiales unidas a los Pokémon (tanto tuyos como de tu rival) proporcionan 1 Energía Colorless y no tienen ningún otro efecto.",
			it: "Tutte le Energie speciali assegnate ai Pokémon, sia tuoi che del tuo avversario, forniscono Energia Colorless e non hanno altri effetti.",
			pt: "Todas as Energias Especiais ligadas aos Pokémon (seus e do seu oponente) fornecem Energia Colorless e não têm nenhum outro efeito.",
			de: "Alle Spezial-Energien, die an Pokémon (deine und die deines Gegners) angelegt sind, liefern Colorless-Energie und haben keinen anderen Effekt."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			pt: "Tiro Assustador",
			de: "Spukschuss"
		},

		damage: 120
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