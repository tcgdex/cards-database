import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Darkrai EX",
		fr: "Darkrai EX",
		es: "Darkrai EX",
		it: "Darkrai EX",
		pt: "Darkrai EX",
		de: "Darkrai EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Pulse",
				fr: "Vibrobscur",
				es: "Pulso Umbrío",
				it: "Neropulsar",
				pt: "Pulso Sombrio",
				de: "Finsteraura"
			},
			effect: {
				en: "This attack does 20 more damage for each Darkness Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Darkness attachée à tous vos Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Darkness unida a todos tus Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Darkness assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 20 de danos adicionais para cada Energia Darkness ligada a todos os seus Pokémon.",
				de: "Dieser Angriff fügt für jede Darkness-Energie, die an deine Pokémon angelegt sind, 20 weitere Schadenpunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dark Head",
				fr: "Tête Obscure",
				es: "Cabeza Oscura",
				it: "Testa Oscura",
				pt: "Cabeça Sombria",
				de: "Düsterer Kopf"
			},
			effect: {
				en: "If your opponent's Active Pokémon is Asleep, this attack does 80 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Endormi, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Dormido, este ataque hace 80 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è addormentato, questo attacco infligge 80 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Adormecido, este ataque causará 80 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners schläft, fügt dieser Angriff 80 weitere Schadenspunkte zu."
			},
			damage: "80+",

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
