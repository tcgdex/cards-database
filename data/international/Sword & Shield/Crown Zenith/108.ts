import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee V",
		'fr-fr': "Évoli V",
		'es-es': "Eevee V",
		'it-it': "Eevee V",
		'pt-br': "Eevee V",
		'de-de': "Evoli V"
	},

	illustrator: "You Iribi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Vee Brave",
			'fr-fr': "Vraiment Vaillant",
			'es-es': "Atre-Veedo",
			'it-it': "Audace V",
			'pt-br': "Bravo V",
			'de-de': "V-Kühnheit"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon V, this attack does 80 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-V, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon V, este ataque hace 80 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-V, questo attacco infligge 80 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon V, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-V ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
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
				cardmarket: 691827,
				tcgplayer: 477251
			}
		},
	],
}

export default card
