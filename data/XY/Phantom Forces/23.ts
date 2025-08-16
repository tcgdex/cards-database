import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Manectric EX",
		fr: "Élecsprint EX",
		es: "Manectric EX",
		it: "Manectric EX",
		pt: "Manectric EX",
		de: "Voltenso EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 170,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
				es: "Rebasar",
				it: "Oltrepassare",
				pt: "Atropelar",
				de: "Überrennen"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Esse ataque causa 20 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Assault Laser",
				fr: "Laser d'Assaut",
				es: "Láser de Asalto",
				it: "Laserassalto",
				pt: "Laser de Ataque",
				de: "Offensiv-Laser"
			},
			effect: {
				en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente possuir um card de Ferramenta Pokémon ligado a ele, esse ataque causará 60 de danos adicionais.",
				de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281827,
		tcgplayer: 94156
	}
}

export default card
