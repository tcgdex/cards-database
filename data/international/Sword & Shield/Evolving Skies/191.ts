import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dragonite V",
		'fr-fr': "Dracolosse V",
		'es-es': "Dragonite V",
		'it-it': "Dragonite V",
		'pt-br': "Dragonite V",
		'de-de': "Dragoran V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 230,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "Saki Hayashiro",

	attacks: [{
		name: {
			'en-us': "Shred",
			'fr-fr': "Déchiquetage",
			'es-es': "Hacer Trizas",
			'it-it': "Tritatutto",
			'pt-br': "Shred",
			'de-de': "Zerfetzer"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			'it-it': "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			'de-de': "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Dragon Gale",
			'fr-fr': "Bourrasque Draconique",
			'es-es': "Vendaval de Dragón",
			'it-it': "Dragoraffica",
			'pt-br': "Dragon Gale",
			'de-de': "Drachensturm"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 250,
		cost: ["Water", "Water", "Lightning"]
	}],

	retreat: 3,
	dexId: [149],
	regulationMark: "E",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574249,
				tcgplayer: 246757
			}
		},
	],
}

export default card
