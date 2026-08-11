import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [128],
	set: Set,

	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'de-de': "Tauros",
		'it-it': "Tauros",
		'es-es': "Tauros",
		'pt-br': "Tauros",
		'es-mx': "Tauros"
	},


	illustrator: "yuu",

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'de-de': "Hornattacke",
			'it-it': "Incornata",
			'es-es': "Cornada",
			'pt-br': "Ataque de Chifre",
			'es-mx': "Ataque Cuerno"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Clean Hit",
			'fr-fr': "Coup Net",
			'de-de': "Sauberer Treffer",
			'it-it': "Colpo Pulito",
			'es-es': "Impacto Limpio",
			'pt-br': "Golpe Certeiro",
			'es-mx': "Golpe Limpio"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 50 dégâts supplémentaires.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 50 danni in più.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 50 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 50 puntos de daño más."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826026,
				tcgplayer: 632957
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826026,
				tcgplayer: 632957
			}
		},
	],
}

export default card
