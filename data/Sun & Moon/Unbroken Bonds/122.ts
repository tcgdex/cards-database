import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeur d’Alola",
		es: "Dugtrio de Alola",
		it: "Dugtrio di Alola",
		pt: "Dugtrio de Alola",
		de: "Alola-Digdri"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hair Wall",
				fr: "Mur Capillaire",
				es: "Muro Capilar",
				it: "Murochioma",
				pt: "Muralha de Cabelo",
				de: "Haarwall"
			},
			effect: {
				en: "Your Metal Pokémon take 10 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Vos Pokémon Metal subissent 10 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tu rival hacen 10 puntos de daño menos a tus Pokémon Metal (después de aplicar Debilidad y Resistencia).",
				it: "I tuoi Pokémon Metal subiscono 10 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Seus Pokémon Metal recebem 10 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Deinen Metal-Pokémon werden durch Attacken deines Gegners 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
