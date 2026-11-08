import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [571],
	set: Set,

	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
		'es-es': "Zoroark",
		'it-it': "Zoroark",
		'pt-br': "Zoroark",
		'de-de': "Zoroark"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
		'es-es': "Zorua",
		'it-it': "Zorua",
		'pt-br': "Zorua",
		'de-de': "Zorua"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Illusory Hijacking",
			'fr-fr': "Détournement Illusoire",
			'es-es': "Secuestro Ilusorio",
			'it-it': "Sopraffazione Illusoria",
			'pt-br': "Apropriação Ilusória",
			'de-de': "Illusionsübernahme"
		},

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon ex and Pokémon V in play.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon-ex et Pokémon-V en jeu de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon ex y Pokémon V en juego de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon-ex e Pokémon-V in gioco del tuo avversario.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon ex e Pokémon V do seu oponente em jogo.",
			'de-de': "Diese Attacke fügt für jedes Pokémon-ex und Pokémon-V deines Gegners im Spiel 60 Schadenspunkte zu."
		},

		damage: "60×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "nagimiso",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780927,
				tcgplayer: 560342
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780927,
				tcgplayer: 560342
			}
		},
	],
}

export default card
