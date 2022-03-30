import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Yveltal",
		fr: "Yveltal",
		es: "Yveltal",
		it: "Yveltal",
		pt: "Yveltal",
		de: "Yveltal"
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
				en: "Fright Night",
				fr: "Nuit d'Effroi",
				es: "Noche Tenebrosa",
				it: "Nottedipaura",
				pt: "Noite de Susto",
				de: "Schreckensnacht"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, each Pokémon Tool card in play has no effect.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque carte Outil Pokémon en jeu n'a aucun effet.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, las cartas de Herramienta Pokémon en juego no tienen efecto.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, nessuna carta Oggetto Pokémon in gioco ha effetto.",
				pt: "Enquanto este Pokémon for seu Pokémon Ativo, nenhum card de Ferramenta Pokémon em jogo terá efeito.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, hat jede Pokémon-Ausrüstung im Spiel keine Wirkung."
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
				en: "Pitch-Black Spear",
				fr: "Javelot Noir Absolu",
				es: "Lanza Azabache",
				it: "Lancia Tuttanera",
				pt: "Lança de Escuridão Total",
				de: "Pechschwarzer Speer"
			},
			effect: {
				en: "This attack does 60 damage to 1 of your opponent's Benched Pokémon-EX. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 60 dégâts à l'un des Pokémon-EX de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 60 puntos de daño a 1 de los Pokémon-EX en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 60 danni a uno dei Pokémon-EX nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 60 de danos a 1 dos Pokémon-EX no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon-EX auf der Bank deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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



}

export default card
