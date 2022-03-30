import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Gallade EX",
		fr: "Gallame EX",
		es: "Gallade EX",
		it: "Gallade EX",
		pt: "Gallade EX",
		de: "Galagladi EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 170,

	types: [
		"Psychic",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Swift Lunge",
				fr: "Estocade",
				es: "Súbita Estocada",
				it: "Rapidaffondo",
				pt: "Estocada Veloz",
				de: "Flinker Ausfall"
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Você poderá fazer com que seu oponente troque o Pokémon Ativo por 1 dos Pokémon no Banco dele ou dela.",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Piercing Prizes",
				fr: "Percée Récompense",
				es: "Premios Penetrantes",
				it: "Perforapremi",
				pt: "Prêmios Perfurantes",
				de: "Schneidende Preise"
			},
			effect: {
				en: "This attack does 20 more damage for each of your remaining Prize cards.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu'il vous reste.",
				es: "Este ataque hace 20 puntos de daño más por cada carta de Premio que te quede.",
				it: "Questo attacco infligge 20 danni in più per ogni carta Premio che ti resta.",
				pt: "Este ataque causa 20 de danos adicionais para cada um dos seus cards de Prêmio restantes.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede deiner verbleibenden Preiskarten zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
