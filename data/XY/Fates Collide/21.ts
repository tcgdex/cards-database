import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "White Kyurem",
		fr: "Kyurem Blanc",
		es: "Kyurem Blanco",
		it: "Kyurem Bianco",
		pt: "Kyurem Branco",
		de: "Weißes Kyurem"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Burning Icicles",
				fr: "Stalactites Brûlantes",
				es: "Témpanos Ardientes",
				it: "Ghiaccio Ardente",
				pt: "Gelo em Chamas",
				de: "Brennende Eiszapfen"
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si de l'Énergie Fire est attachée à ce Pokémon, cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Si este Pokémon tiene alguna Energía Fire unida a él, este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Se questo Pokémon ha delle Energie Fire assegnate, questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Se este Pokémon possuir alguma Energia Fire ligada a ele, este ataque causará 20 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Wenn an dieses Pokémon bereits Fire-Energie angelegt ist, fügt dieser Angriff 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
				es: "Quemadura de Hielo",
				it: "Pirobora",
				pt: "Queimadura de Neve",
				de: "Blizzardbrand"
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289847
	}
}

export default card
