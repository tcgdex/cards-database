import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Boltund V",
		fr: "Fulgudog V",
		es: "Boltund V",
		it: "Boltund V",
		pt: "Boltund V",
		de: "Bellektro V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrify",
				fr: "Électrisation",
				es: "Electrificación",
				it: "Elettrocontagio",
				pt: "Eletrificar",
				de: "Elektrifizierung"
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie Lightning, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a tus Pokémon en Banca de la manera que desees. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale ai tuoi Pokémon in panchina nel modo che preferisci. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as aos seus Pokémon no Banco como desejar. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie beliebig an die Pokémon auf deiner Bank an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Bolt Storm",
				fr: "Tempête Éclair",
				es: "Tormenta de Relámpagos",
				it: "Fulmintempesta",
				pt: "Tempestade Relampejante",
				de: "Elektrosturm"
			},
			effect: {
				en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Lightning attachée à tous vos Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada Energía Lightning unida a todos tus Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni Energia Lightning assegnata ai tuoi Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Energia Lightning ligada a todos os seus Pokémon.",
				de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte Lightning-Energie 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 200,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
