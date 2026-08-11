import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Eiscue V",
		'fr-fr': "Bekaglaçon V",
		'es-es': "Eiscue V",
		'it-it': "Eiscue V",
		'pt-br': "Eiscue V",
		'de-de': "Kubuin V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [875],
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Cold Absorption",
				'fr-fr': "Absorbe Froid",
				'es-es': "Fría Absorción",
				'it-it': "Assorbifreddo",
				'pt-br': "Absorção Fria",
				'de-de': "Kältebindung"
			},
			effect: {
				'en-us': "Whenever you attach a Water Energy card from your hand to this Pokémon during your turn, heal 30 damage from it.",
				'fr-fr': "Chaque fois que vous attachez une carte Énergie Water de votre main à ce Pokémon pendant votre tour, soignez 30 de ses dégâts.",
				'es-es': "Cada vez que unas 1 carta de Energía Water de tu mano a este Pokémon durante tu turno, cúrale 30 puntos de daño.",
				'it-it': "Ogni volta che assegni una carta Energia Water a questo Pokémon dalla tua mano durante il tuo turno, curalo da 30 danni.",
				'pt-br': "Sempre que ligar 1 carta de Energia Water da sua mão a este Pokémon durante o seu turno, cure 30 pontos de dano dele.",
				'de-de': "Jedes Mal, wenn du während deines Zuges 1 Water-Energiekarte aus deiner Hand an dieses Pokémon anlegst, heile 30 Schadenspunkte bei diesem Pokémon."
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
				'en-us': "Blizzard",
				'fr-fr': "Blizzard",
				'es-es': "Ventisca",
				'it-it': "Bora",
				'pt-br': "Nevasca",
				'de-de': "Blizzard"
			},
			effect: {
				'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456448,
				tcgplayer: 213136
			}
		},
		{
			type: 'holo',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 672383
			}
		},
	],
}

export default card
