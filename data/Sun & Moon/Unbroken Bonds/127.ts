import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Genesect",
		fr: "Genesect",
		es: "Genesect",
		it: "Genesect",
		pt: "Genesect",
		de: "Genesect"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 130,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fast-Flight Configuration",
				fr: "Configuration Vol Rapide",
				es: "Configuración Vuelo Rápido",
				it: "Assetto di Volo Rapido",
				pt: "Postura de Voo Veloz",
				de: "Schnellflugkonfiguration"
			},
			effect: {
				en: "If your opponent has any Pokémon-GX or Pokémon-EX in play, this Pokémon has no Retreat Cost.",
				fr: "Si votre adversaire a au moins un Pokémon-GX ou Pokémon-EX en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Si tu rival tiene algún Pokémon-GX o Pokémon-EX en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se il tuo avversario ha dei Pokémon-GX o dei Pokémon-EX in gioco, questo Pokémon non ha costo di ritirata.",
				pt: "Se o seu oponente tiver algum Pokémon-GX ou Pokémon-EX em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn dein Gegner mindestens 1 Pokémon-GX oder Pokémon-EX im Spiel hat, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splitting Beam",
				fr: "Rayon Divergent",
				es: "Rayo Dividido",
				it: "Raggio Scisso",
				pt: "Feixe Dividido",
				de: "Spaltstrahl"
			},
			effect: {
				en: "This attack does 30 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372416,
		tcgplayer: 189226
	}
}

export default card
