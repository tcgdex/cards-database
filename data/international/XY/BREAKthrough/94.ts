import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'es-es': "Yveltal",
		'it-it': "Yveltal",
		'pt-br': "Yveltal",
		'de-de': "Yveltal"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fright Night",
				'fr-fr': "Nuit d'Effroi",
				'es-es': "Noche Tenebrosa",
				'it-it': "Nottedipaura",
				'pt-br': "Noite de Susto",
				'de-de': "Schreckensnacht"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, each Pokémon Tool card in play has no effect.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, chaque carte Outil Pokémon en jeu n'a aucun effet.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, las cartas de Herramienta Pokémon en juego no tienen efecto.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, nessuna carta Oggetto Pokémon in gioco ha effetto.",
				'pt-br': "Enquanto este Pokémon for seu Pokémon Ativo, nenhum card de Ferramenta Pokémon em jogo terá efeito.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, hat jede Pokémon-Ausrüstung im Spiel keine Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pitch-Black Spear",
				'fr-fr': "Javelot Noir Absolu",
				'es-es': "Lanza Azabache",
				'it-it': "Lancia Tuttanera",
				'pt-br': "Lança de Escuridão Total",
				'de-de': "Pechschwarzer Speer"
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 60 de danos a 1 dos Pokémon-EX no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon-EX auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.",
	},

	thirdParty: {
		cardmarket: 286340,
		tcgplayer: 107213
	}
}

export default card
