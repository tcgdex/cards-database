import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
		es: "Vespiquen",
		it: "Vespiquen",
		pt: "Vespiquen",
		de: "Honweisel"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		416,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bee Drain",
				fr: "Abeille Épuisante",
				es: "Absorción Abeja",
				it: "Apeassorbi",
				pt: "Dreno de Abelha",
				de: "Bienensauger"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				it: "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				pt: "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-Griffe",
				es: "Golpes Furia",
				it: "Sfuriate",
				pt: "Golpes de Fúria",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				pt: "Jogue 3 moedas. Este ataque causa 30 de danos vezes o número de caras.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	abilities: [{
		type: "Ability",

		name: {
			en: "{title}:",
			fr: "{title}:",
			es: "{title}:",
			it: "{title}:",
			pt: "{title}:",
			de: "{title}:"
		},

		effect: {
			en: "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			fr: "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			es: "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			it: "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			pt: "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			de: "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}]
}

export default card
