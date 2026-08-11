import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [826],
	set: Set,

	name: {
		'en-us': "Orbeetle V",
		'fr-fr': "Astronelle V",
		'es-es': "Orbeetle V",
		'it-it': "Orbeetle V",
		'pt-br': "Orbeetle V",
		'de-de': "Maritellit V"
	},

	illustrator: "Nisota Niso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Strafe",
			'fr-fr': "Bombarder",
			'es-es': "Pasada de Ataque",
			'it-it': "Mitragliare",
			'pt-br': "Bombardear",
			'de-de': "Beharken"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Mysterious Wave",
			'fr-fr': "Onde Mystérieuse",
			'es-es': "Onda Misteriosa",
			'it-it': "Onda Enigmatica",
			'pt-br': "Onda Oculta",
			'de-de': "Geheimnisvolle Welle"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	retreat: 1,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674231,
				tcgplayer: 284272
			}
		},
	],
}

export default card
