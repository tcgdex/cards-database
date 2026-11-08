import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [149],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Dragonite V",
		'fr-fr': "Dracolosse V",
		'de-de': "Dragoran V",
		'es-es': "Dragonite V",
		'pt-br': "Dragonite V",
		'it-it': "Dragonite V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Déchiquetage",
			'de-de': "Zerfetzer",
			'es-es': "Hacer Trizas",
			'pt-br': "Triturar",
			'it-it': "Tritatutto",
			'en-us': "Shred"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Lightning"],

		name: {
			'fr-fr': "Bourrasque Draconique",
			'de-de': "Drachensturm",
			'es-es': "Vendaval de Dragón",
			'pt-br': "Vendaval do Dragão",
			'it-it': "Dragoraffica",
			'en-us': "Dragon Gale"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		},

		damage: 250
	}],

	retreat: 3,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 576501
	}
}

export default card
