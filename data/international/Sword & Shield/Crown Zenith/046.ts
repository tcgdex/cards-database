import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Rotom VSTAR",
		'fr-fr': "Motisma VSTAR",
		'es-es': "Rotom V-ASTRO",
		'it-it': "Rotom V ASTRO",
		'pt-br': "Rotom V-ASTRO",
		'de-de': "Rotom VSTAR"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Rotom V",
		'fr-fr': "Motisma-V",
		'es-es': "Rotom V",
		'it-it': "Rotom-V",
		'pt-br': "Rotom V",
		'de-de': "Rotom-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Scrap Pulse",
			'fr-fr': "Impulsion Rebut",
			'es-es': "Pulso Chatarra",
			'it-it': "Impulsoscarto",
			'pt-br': "Pulso de Sucata",
			'de-de': "Schrottpuls"
		},

		effect: {
			'en-us': "Put any number of Pokémon Tool cards from your discard pile in the Lost Zone. This attack does 40 more damage for each card you put in the Lost Zone in this way.",
			'fr-fr': "Placez le nombre voulu de cartes Outil Pokémon de votre pile de défausse dans la Zone Perdue. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte placée dans la Zone Perdue de cette façon.",
			'es-es': "Pon cualquier cantidad de cartas de Herramienta Pokémon de tu pila de descartes en la Zona Perdida. Este ataque hace 40 puntos de daño más por cada carta que hayas puesto en la Zona Perdida de esta manera.",
			'it-it': "Prendi un numero qualsiasi di carte Oggetto Pokémon dalla tua pila degli scarti e mettile nell'area perduta. Questo attacco infligge 40 danni in più per ogni carta che hai messo nell'area perduta in questo modo.",
			'pt-br': "Coloque qualquer número de cartas de Ferramenta Pokémon da sua pilha de descarte na Zona Perdida. Este ataque causa 40 pontos de dano a mais para cada carta que você colocou na Zona Perdida desta forma.",
			'de-de': "Lege beliebig viele Pokémon-Ausrüstungen aus deinem Ablagestapel ins Nirgendwo. Diese Attacke fügt für jede auf diese Weise ins Nirgendwo gelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691763,
				tcgplayer: 477054
			}
		},
	],
}

export default card
