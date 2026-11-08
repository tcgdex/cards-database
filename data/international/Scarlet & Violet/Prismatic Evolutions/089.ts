import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'pt-br': "Hawlucha",
		'it-it': "Hawlucha",
		'de-de': "Resladero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rising Tackle",
			'fr-fr': "Tacle Montant",
			'es-es': "Placaje Ascendente",
			'pt-br': "Investida Crescente",
			'it-it': "Azione Ascendente",
			'de-de': "Vorschnellender Tackle"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this attack does 50 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este ataque hace 50 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este ataque causará 50 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo attacco infligge 50 danni in più.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "KEIICHIRO ITO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805481,
				tcgplayer: 610444
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805481,
				tcgplayer: 610444
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806538,
				tcgplayer: 610602
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806539,
				tcgplayer: 610703
			}
		},
	],
}

export default card
