import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'es-es': "Regigigas",
		'pt-br': "Regigigas",
		'it-it': "Regigigas",
		'de-de': "Regigigas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Jewel Breaker",
			'fr-fr': "Destruction de Joyaux",
			'es-es': "Rompejoyas",
			'pt-br': "Quebra-joias",
			'it-it': "Distruttore di Gemme",
			'de-de': "Juwelenbrecher"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Tera Pokémon, this attack does 230 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Téracristal, cette attaque inflige 230 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Teracristal, este ataque hace 230 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon Tera, este ataque causará 230 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Teracristal, questo attacco infligge 230 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Terakristall-Pokémon ist, fügt diese Attacke 230 Schadenspunkte mehr zu."
		},

		damage: "100+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "H",
	illustrator: "chibi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805478,
				tcgplayer: 610441
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805478,
				tcgplayer: 610441
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806532,
				tcgplayer: 610599
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806533,
				tcgplayer: 610700
			}
		},
	],
}

export default card
