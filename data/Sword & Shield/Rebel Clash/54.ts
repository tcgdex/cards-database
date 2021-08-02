import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Eiscue",
		fr: "Bekaglaçon",
		es: "Eiscue",
		it: "Eiscue",
		pt: "Eiscue",
		de: "Kubuin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ice Face",
				fr: "Tête de Gel",
				es: "Cara de Hielo",
				it: "Gelofaccia",
				pt: "Cara de Gelo",
				de: "Tiefkühlkopf"
			},
			effect: {
				en: "If this Pokémon has full HP, it takes 60 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Si ce Pokémon a tous ses PV, il subit 60 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Si este Pokémon tiene todos sus PS, los ataques de tu rival le hacen 60 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
				it: "Se questo Pokémon ha tutti i PS, subisce 60 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Se este Pokémon tiver PS cheio, receberá 60 pontos de dano a menos dos ataques do seu oponente (depois de aplicar Fraqueza e Resistência).",
				de: "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken deines Gegners 60 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
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
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
