import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [83],
	set: Set,

	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'es-es': "Farfetch'd",
		'it-it': "Farfetch'd",
		'pt-br': "Farfetch'd",
		'de-de': "Porenta"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Leek Lash",
			'fr-fr': "Fouet Poireau",
			'es-es': "Latigazo Puerro",
			'it-it': "Gambofrusta",
			'pt-br': "Chicote-poró",
			'de-de': "Lauchhieb"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608661,
				tcgplayer: 263838
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608661,
				tcgplayer: 263838
			}
		},
	],
}

export default card
