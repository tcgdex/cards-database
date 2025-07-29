import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Primal Groudon EX",
		fr: "Primo-Groudon EX",
		es: "Groudon Primigenio EX",
		it: "Archeo Groudon EX",
		pt: "Groudon Primitivo EX",
		de: "Proto-Groudon EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 240,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
		es: "Groudon-EX",
		it: "Groudon-EX",
		pt: "Groudon-EX",
		de: "Groudon-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Gaia Volcano",
				fr: "Volcan de Gaïa",
				es: "Volcán Gaia",
				it: "Vulcano Gaia",
				pt: "Vulcão Gaia",
				de: "Gaia-Vulkan"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
				fr: "S'il y a une carte Stade en jeu, cette attaque inflige 100 dégâts supplémentaires. Défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 100 puntos de daño más. Descarta esa carta de Estadio.",
				it: "Se c'è in gioco una carta Stadio, questo attacco infligge 100 danni in più. Scarta quella carta Stadio.",
				pt: "Se houver algum card de Estádio em jogo, este ataque causará 100 de danos adicionais. Descarte o card de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt dieser Angriff 100 weitere Schadenspunkte zu. Lege diese Stadionkarte auf den Ablagestapel."
			},
			damage: "100+",

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	suffix: "EX",

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
			en: "{title}: When 1 of your Pokémon becomes this Pokémon, heal all damage from it.",
			fr: "{title}: Lorsqu'un de vos Pokémon devient ce Pokémon, soignez tous les dégâts de ce Pokémon.",
			es: "{title}: Cuando 1 de tus Pokémon se convierte en este Pokémon, cura todos sus puntos de daño.",
			it: "{title}: Quando uno dei tuoi Pokémon diventa questo Pokémon, curane tutti i danni.",
			pt: "{title}: Quando 1 dos seus Pokémon se tornar este Pokémon, cure todos os danos dele.",
			de: "{title}: Wenn 1 deiner Pokémon zu diesem Pokémon wird, heile allen Schaden bei diesem Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 284278
	}
}

export default card
