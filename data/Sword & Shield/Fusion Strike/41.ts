import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Flame Cloak",
			fr: "Manteau de Feu",
			de: "Flammenumhang",
			es: "Manto Ígneo",
			pt: "Manto de Chamas",
			it: "Radunafuoco"
		},

		damage: 20,

		effect: {
			en: "Attach a {R} Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie {R} de votre pile de défausse à ce Pokémon.",
			de: "Lege 1 {R}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			es: "Une 1 carta de Energía {R} de tu pila de descartes a este Pokémon.",
			pt: "Ligue 1 carta de Energia {R} da sua pilha de descarte a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia {R} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Exciting Flame",
			fr: "Flamme Crépitante",
			de: "Famose Flamme",
			es: "Llama Emocionante",
			pt: "Chamas Empolgantes",
			it: "Ravvivafiamma"
		},

		damage: 90,

		effect: {
			en: "If this Pokémon has at least 3 extra Energy attached (in addition to this attack's cost), this attack also does 180 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige aussi 180 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			de: "Wenn an dieses Pokémon mindestens 3 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			es: "Si este Pokémon tiene por lo menos 3 Energías adicionales unidas a él (además de las del coste de este ataque), este ataque también hace 180 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			pt: "Se este Pokémon tiver pelo menos 3 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque também causará 180 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			it: "Se questo Pokémon ha almeno tre Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge anche 180 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582175,
		tcgplayer: 253150
	}
}

export default card