import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eiscue V",
		fr: "Bekaglaçon V",
		es: "Eiscue V",
		it: "Eiscue V",
		pt: "Eiscue V",
		de: "Kubuin V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cold Absorption",
				fr: "Absorbe Froid",
				es: "Fría Absorción",
				it: "Assorbifreddo",
				pt: "Absorção Fria",
				de: "Kältebindung"
			},
			effect: {
				en: "Whenever you attach a Water Energy card from your hand to this Pokémon during your turn, heal 30 damage from it.",
				fr: "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon pendant votre tour, soignez 30 de ses dégâts.",
				es: "Cada vez que unas 1 carta de Energía Water de tu mano a este Pokémon durante tu turno, cúrale 30 puntos de daño.",
				it: "Ogni volta che assegni una carta Energia Water a questo Pokémon dalla tua mano durante il tuo turno, curalo da 30 danni.",
				pt: "Sempre que ligar 1 carta de Energia Water da sua mão a este Pokémon durante o seu turno, cure 30 pontos de dano dele.",
				de: "Jedes Mal, wenn du während deines Zuges 1 Water-Energiekarte aus deiner Hand an dieses Pokémon anlegst, heile 30 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard",
				fr: "Blizzard",
				es: "Ventisca",
				it: "Bora",
				pt: "Nevasca",
				de: "Blizzard"
			},
			effect: {
				en: "This attack also does 10 damage to each of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 210,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
