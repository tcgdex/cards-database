import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Piloswine",
		fr: "Cochignon",
		es: "Piloswine",
		it: "Piloswine",
		pt: "Piloswine",
		de: "Keifel"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
		es: "Swinub",
		it: "Swinub",
		pt: "Swinub",
		de: "Quiekel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Recul",
				es: "Oprimir",
				it: "Spintonare",
				pt: "Rebaixar",
				de: "Runterdrücken"
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Seu oponente troca o Pokémon Ativo por 1 dos próprios Pokémon no Banco.",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gathering Footsteps",
				fr: "Collecte d'Empreintes",
				es: "Huellas de Grupo",
				it: "Orme Vicine",
				pt: "Coleta de Pegadas",
				de: "Viele Spuren"
			},
			effect: {
				en: "This attack does 10 more damage for each Colorless in the Retreat Cost of your Swinub, Piloswine, and Mamoswine.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite de votre Marcacrin, Cochignon et Mammochon.",
				es: "Este ataque hace 10 puntos de daño más por cada Colorless en el Coste de Retirada de tus Swinub, Piloswine y Mamoswine.",
				it: "Questo attacco infligge 10 danni in più per ogni Colorless nel costo di ritirata dei tuoi Swinub, Piloswine e Mamoswine.",
				pt: "Este ataque causa 10 de danos adicionais para cada Colorless no Custo para Recuar dos seus Swinub, Piloswine e Mamoswine.",
				de: "Dieser Angriff fügt 10 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten deiner Quiekel, Keifel und Mamutel zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 286327,
		tcgplayer: 107200
	}
}

export default card
