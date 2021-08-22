import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
				es: "Triturar",
				it: "Sgranocchio",
				pt: "Mastigada",
				de: "Knirscher"
			},
			effect: {
				en: "Discard an Energy attached to your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadowy Bite",
				fr: "Morsure d’Ombre",
				es: "Mordisco Sombrío",
				it: "Morso Oscuro",
				pt: "Mordida das Trevas",
				de: "Schattenbiss"
			},
			effect: {
				en: "This attack does 60 damage times the number of Special Energy cards in your opponent’s discard pile.",
				fr: "Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
				es: "Este ataque hace 60 puntos de daño por cada carta de Energía Especial en la pila de descartes de tu rival.",
				it: "Questo attacco infligge 60 danni per ogni carta Energia speciale presente nella pila degli scarti del tuo avversario.",
				pt: "Este ataque causa 60 de danos vezes o número de cards de Energia Especial na pilha de descarte do seu oponente.",
				de: "Dieser Angriff fügt 60 Schadenspunkte mal der Anzahl der Spezial-Energiekarten im Ablagestapel deines Gegners zu."
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
