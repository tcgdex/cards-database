import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Rayquaza EX",
		fr: "Rayquaza EX",
		es: "Rayquaza EX",
		it: "Rayquaza EX",
		pt: "Rayquaza EX",
		de: "Rayquaza EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 170,

	types: [
		"Colorless",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Intensifying Burn",
				fr: "Rage Brûlante",
				es: "Intensa Quemadura",
				it: "Scottatanto",
				pt: "Queimadura Intensificante",
				de: "Brandverstärker"
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-EX, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-EX, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-EX, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-EX, este ataque causará 50 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-EX ist, fügt dieser Angriff 50 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Pulse",
				fr: "Dracochoc",
				es: "Pulso Dragón",
				it: "Dragopulsar",
				pt: "Pulso do Dragão",
				de: "Drachenpuls"
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
				es: "Descarta las 3 primeras cartas de tu baraja.",
				it: "Scarta le prime tre carte del tuo mazzo.",
				pt: "Descarte os 3 cards de cima do seu baralho.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
