import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Mega Starmie ex",
		fr: "Méga-Staross-ex",
		es: "Mega-Starmie ex",
		de: "Mega-Starmie-ex",
		it: "Mega Starmie-ex",
		pt: "Mega Starmie ex"
	},
	set: Set,
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [
		121
	],
	hp: 330,
	types: [
		"Water"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		de: "Sterndu",
		it: "Staryu",
		pt: "Staryu"
	},
	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Jetting Blow",
				fr: "Coup Éclaboussant",
				es: "Golpe Propulsión",
				de: "Wasserschwall",
				it: "Colpogetto",
				pt: "Golpe a Jato"
			},
			damage: "120",
			effect: {
				en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 50 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 50 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
				it: "Questo attacco infligge anche 50 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 50 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Nebula Beam",
				fr: "Rayon Nébuleux",
				es: "Rayo Nebulosa",
				de: "Nebelstrahl",
				it: "Nebularaggio",
				pt: "Feixe Celestial"
			},
			damage: "210",
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en el Pokémon Activo de tu rival.",
				de: "Der Schaden dieser Attacke wird durch Schwäche oder Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "takuyoa",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684362,
		cardmarket: 877535
	}
}

export default card
