import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [580],
	set: Set,

	name: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'de-de': "Piccolente",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'es-es': "Ducklett",
		'es-mx': "Ducklett"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Firefighting",
			'fr-fr': "Anti-Flammes",
			'de-de': "Feuerwehr",
			'it-it': "Estinzione",
			'pt-br': "Apagar Incêndios",
			'es-es': "Antiincendios",
			'es-mx': "Apagafuegos"
		},

		effect: {
			'en-us': "Discard a {R} Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie {R} du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 {R}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Scarta un'Energia {R} dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia {R} do Pokémon Ativo do seu oponente.",
			'es-es': "Descarta 1 Energía {R} del Pokémon Activo de tu rival.",
			'es-mx': "Descarta 1 Energía {R} del Pokémon Activo de tu rival."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'de-de': "Flügelschlag",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'es-es': "Ataque Ala",
			'es-mx': "Ataque de Ala"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835952,
				tcgplayer: 642137
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835952,
				tcgplayer: 642137
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836537,
				tcgplayer: 642381
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836538,
				tcgplayer: 642309
			}
		},
	],
}

export default card
