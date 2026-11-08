import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [454],
	set: Set,

	name: {
		'en-us': "Toxicroak",
		'fr-fr': "Coatox",
		'es-es': "Toxicroak",
		'it-it': "Toxicroak",
		'pt-br': "Toxicroak",
		'de-de': "Toxiquak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Croagunk",
		'fr-fr': "Cradopaud",
		'es-es': "Croagunk",
		'it-it': "Croagunk",
		'pt-br': "Croagunk",
		'de-de': "Glibunkel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha",
			'de-de': "Korkenzieherhieb"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Clean Hit",
			'fr-fr': "Coup Net",
			'es-es': "Impacto Limpio",
			'it-it': "Colpo Pulito",
			'pt-br': "Golpe Certeiro",
			'de-de': "Sauberer Treffer"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "Anesaki Dynamic",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780919,
				tcgplayer: 560334
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780919,
				tcgplayer: 560334
			}
		},
	],
}

export default card
