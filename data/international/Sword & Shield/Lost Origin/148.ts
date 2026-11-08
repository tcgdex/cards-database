import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [626],
	set: Set,

	name: {
		'en-us': "Bouffalant",
		'fr-fr': "Frison",
		'es-es': "Bouffalant",
		'it-it': "Bouffalant",
		'pt-br': "Bouffalant",
		'de-de': "Bisofank"
	},

	illustrator: "Nisota Niso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Lost Headbutt",
			'fr-fr': "Coup d'Boule Perdu",
			'es-es': "Testarazo Perdido",
			'it-it': "Bottintesta Perduto",
			'pt-br': "Cabeçada Perdida",
			'de-de': "Nirgendwo-Kopfstoß"
		},

		effect: {
			'en-us': "Put an Energy attached to your opponent's Active Pokémon in the Lost Zone.",
			'fr-fr': "Placez une Énergie attachée au Pokémon Actif de votre adversaire dans la Zone Perdue.",
			'es-es': "Pon 1 Energía unida al Pokémon Activo de tu rival en la Zona Perdida.",
			'it-it': "Prendi un'Energia assegnata al Pokémon attivo del tuo avversario e mettila nell'area perduta.",
			'pt-br': "Coloque 1 Energia ligada ao Pokémon Ativo do seu oponente na Zona Perdida.",
			'de-de': "Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie ins Nirgendwo."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Superpowered Horns",
			'fr-fr': "Cornes Surpuissantes",
			'es-es': "Cuernos Superpoderosos",
			'it-it': "Corna Superpotenziate",
			'pt-br': "Chifres Superpoderosos",
			'de-de': "Superstarke Hörner"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674157,
				tcgplayer: 284075
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674157,
				tcgplayer: 284075
			}
		},
	],
}

export default card
