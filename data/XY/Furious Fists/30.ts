import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire",
		de: "Elevoltek"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tag Team Spark",
				fr: "Étincelle Groupée",
				es: "Chispa en Equipo",
				it: "Scintillasquadra",
				pt: "Faísca de Impulso",
				de: "Tag-Team-Funken"
			},
			effect: {
				en: "This attack does 20 more damage for each Energy attached to your Magmortar.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à vos Maganon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía unida a tus Magmortar.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata ai tuoi Magmortar.",
				pt: "Esse ataque causa 20 de danos adicionais para cada Energia ligada a seu Magmortar.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energie zu, die an deine Magbrant angelegt sind."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
				fr: "Gigavolt",
				es: "Gigavoltio",
				it: "Gigavolt",
				pt: "Gigavolt",
				de: "Gigavolt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
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
	retreat: 3,



}

export default card
