import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 100,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Screech",
				fr: "Grincement",
				es: "Chirrido",
				it: "Stridio",
				pt: "Agudo",
				de: "Kreideschrei"
			},
			effect: {
				en: "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 20 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, los ataques hacen 20 puntos de daño más al Pokémon Defensor (después de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, il Pokémon difensore subisce 20 danni in più dagli attacchi, dopo aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o Pokémon Defensor receberá 20 pontos de dano a mais de ataques (após a aplicação de Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 20 Schadenspunkte mehr zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				es: "Furia",
				it: "Ira",
				pt: "Ira",
				de: "Raserei"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
