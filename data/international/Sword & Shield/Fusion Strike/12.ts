import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [556],
	set: Set,

	name: {
		'en-us': "Maractus",
		'fr-fr': "Maracachi",
		'es-es': "Maractus",
		'it-it': "Maractus",
		'pt-br': "Maractus",
		'de-de': "Maracamba"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "0313",

	description: {
		'en-us': "Once each year, this Pokémon scatters its seeds. They're jam-packed with nutrients, making them a precious food source out in the desert."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'de-de': "Pikser",
			'es-es': "Picotazo",
			'pt-br': "Bicada",
			'it-it': "Beccata"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Ditch and Shake",
			'fr-fr': "Percussion Percutante",
			'de-de': "Loswerden und Schütteln",
			'es-es': "Descarte y Contoneo",
			'pt-br': "Largar e Balançar",
			'it-it': "Scarica e Scuoti"
		},

		damage: "50×",

		effect: {
			'en-us': "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez de votre main autant de cartes Outil Pokémon que vous le voulez. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			'de-de': "Lege beliebig viele Pokémon-Ausrüstungen aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 50 Schadenspunkte zu.",
			'es-es': "Descarta cualquier cantidad de cartas de Herramienta Pokémon de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
			'pt-br': "Descarte qualquer número de cartas de Ferramenta Pokémon da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
			'it-it': "Scarta un numero qualsiasi di carte Oggetto Pokémon che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582040,
				tcgplayer: 253086
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582040,
				tcgplayer: 253086
			}
		},
	],
}

export default card
