import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [330],
	set: Set,

	name: {
		'en-us': "Flygon V",
		'fr-fr': "Libégon V",
		'es-es': "Flygon V",
		'it-it': "Flygon V",
		'pt-br': "Flygon V",
		'de-de': "Libelldra V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Fighting"],

		name: {
			'en-us': "Sand Spray",
			'fr-fr': "Jet Sableux",
			'es-es': "Rociado de Arena",
			'it-it': "Silicospruzzo",
			'pt-br': "Spray de Areia",
			'de-de': "Sandspray"
		},

		damage: 70
	}, {
		cost: ["Grass", "Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Draconic Impulse",
			'fr-fr': "Impulsion Draconienne",
			'es-es': "Impulso Draco",
			'it-it': "Impulso del Drago",
			'pt-br': "Impulso Dracônico",
			'de-de': "Drachenimpuls"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 160 more damage, and discard 3 Energy from this Pokémon.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 160 dégâts supplémentaires et vous défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 160 puntos de daño más, y descartas 3 Energías de este Pokémon.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 160 danni in più e scarti tre Energie da questo Pokémon.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 160 pontos de dano a mais, e descarte 3 Energias deste Pokémon.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 160 Schadenspunkte mehr zu, und du legst 3 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: "160+"
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608710,
				tcgplayer: 263883
			}
		},
	],
}

export default card
