import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
		es: "Ninetales de Alola",
		it: "Ninetales di Alola",
		pt: "Ninetales de Alola",
		de: "Alola Vulnona"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 110,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Rubbish Blizzard",
				fr: "Blizzard de Déchets",
				es: "Ventisca Basura",
				it: "Bufera di Rifiuti",
				pt: "Nevasca Imunda",
				de: "Abfallblizzard"
			},
			effect: {
				en: "This attack does 10 damage for each Pokémon Tool card in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse.",
				es: "Este ataque hace 10 puntos de daño por cada carta de Herramienta Pokémon en tu pila de descartes.",
				it: "Questo attacco infligge 10 danni per ogni carta Oggetto Pokémon nella tua pila degli scarti.",
				pt: "Este ataque causa 10 pontos de dano para cada carta de Ferramenta Pokémon na sua pilha de descarte.",
				de: "Diese Attacke fügt 10 Schadenspunkte mal der Anzahl der Pokémon-Ausrüstungen in deinem Ablagestapel zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408369
	}
}

export default card
