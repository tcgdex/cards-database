import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shin Nagasawa",

	description: {
		'en-us': "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda."
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Adversity Jaws",
			'fr-fr': "Mâchoire de l'Adversité",
			'de-de': "Unglücksbeißer",
			'es-es': "Mandíbulas de Adversidad",
			'pt-br': "Mandíbulas Adversas",
			'it-it': "Mandibole Ostili"
		},

		damage: 70,

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {R} Pokémon, it is now Paralyzed.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon {R}, il est maintenant Paralysé.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein {R}-Pokémon ist, ist es jetzt paralysiert.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon {R}, pasa a estar Paralizado.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon {R}, ele ficará Paralisado.",
			'it-it': "Se il Pokémon attivo del tuo avversario è di tipo {R}, viene paralizzato."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582812,
				tcgplayer: 253332
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582812,
				tcgplayer: 253332
			}
		},
	],
}

export default card
