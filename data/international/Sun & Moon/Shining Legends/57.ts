import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shining Arceus",
		'fr-fr': "Arceus Brillant",
		'es-es': "Arceus Luminoso",
		'it-it': "Arceus iridescente",
		'pt-br': "Arceus Luminescente",
		'de-de': "Schimmerndes Arceus"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fabled Defense",
				'fr-fr': "Défense de Légende",
				'es-es': "Defensa Mítica",
				'it-it': "Mitica Difesa",
				'pt-br': "Defesa Fabulosa",
				'de-de': "Sagenhafte Verteidigung"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, prevent all damage done to your Benched Pokémon by your opponent’s attacks.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, evita todo el daño infligido a tus Pokémon en Banca por ataques de tu rival.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi del tuo avversario.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, prevenirá todo dano causado aos seus Pokémon no Banco por ataques do seu oponente.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken deines Gegners zugefügt wird."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ultimate Arrow",
				'fr-fr': "Flèche Ultime",
				'es-es': "Flecha Definitiva",
				'it-it': "Freccia Finale",
				'pt-br': "Flecha Final",
				'de-de': "Ultimativ-Pfeil"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
	},

	thirdParty: {
		cardmarket: 302194,
		tcgplayer: 146720
	}
}

export default card
