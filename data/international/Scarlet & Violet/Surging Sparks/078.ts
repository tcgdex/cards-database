import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [480],
	set: Set,

	name: {
		'en-us': "Uxie",
		'fr-fr': "Créhelf",
		'es-es': "Uxie",
		'it-it': "Uxie",
		'pt-br': "Uxie",
		'de-de': "Selfe"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Painful Memories",
			'fr-fr': "Souvenirs Douloureux",
			'es-es': "Recuerdos Dolorosos",
			'it-it': "Brutti Ricordi",
			'pt-br': "Lembranças Dolorosas",
			'de-de': "Schmerzhafte Erinnerungen"
		},

		effect: {
			'en-us': "Put 2 damage counters on each of your opponent's Pokémon.",
			'fr-fr': "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire.",
			'es-es': "Pon 2 contadores de daño en cada uno de los Pokémon de tu rival.",
			'it-it': "Metti due segnalini danno su ciascuno dei Pokémon del tuo avversario.",
			'pt-br': "Coloque 2 contadores de dano em cada um dos Pokémon do seu oponente.",
			'de-de': "Lege 2 Schadensmarken auf jedes Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794377,
				tcgplayer: 590084
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794377,
				tcgplayer: 590084
			}
		},
	],

	illustrator: "HYOGONOSUKE",
	
}

export default card
