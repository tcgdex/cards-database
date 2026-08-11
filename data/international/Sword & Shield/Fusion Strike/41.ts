import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Flame Cloak",
			'fr-fr': "Manteau de Feu",
			'de-de': "Flammenumhang",
			'es-es': "Manto Ígneo",
			'pt-br': "Manto de Chamas",
			'it-it': "Radunafuoco"
		},

		damage: 20,

		effect: {
			'en-us': "Attach a {R} Energy card from your discard pile to this Pokémon.",
			'fr-fr': "Attachez une carte Énergie {R} de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege 1 {R}-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía {R} de tu pila de descartes a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia {R} da sua pilha de descarte a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia {R} dalla tua pila degli scarti."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Exciting Flame",
			'fr-fr': "Flamme Crépitante",
			'de-de': "Famose Flamme",
			'es-es': "Llama Emocionante",
			'pt-br': "Chamas Empolgantes",
			'it-it': "Ravvivafiamma"
		},

		damage: 90,

		effect: {
			'en-us': "If this Pokémon has at least 3 extra Energy attached (in addition to this attack's cost), this attack also does 180 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige aussi 180 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Wenn an dieses Pokémon mindestens 3 extra Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke auch 1 Pokémon auf der Bank deines Gegners 180 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Si este Pokémon tiene por lo menos 3 Energías adicionales unidas a él (además de las del coste de este ataque), este ataque también hace 180 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Se este Pokémon tiver pelo menos 3 Energias adicionais ligadas a ele (além do custo deste ataque), este ataque também causará 180 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Se questo Pokémon ha almeno tre Energie extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge anche 180 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582175,
				tcgplayer: 253150
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582175,
				tcgplayer: 253150
			}
		},
	],
}

export default card
