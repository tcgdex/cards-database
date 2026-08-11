import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [988],
	set: Set,

	name: {
		'en-us': "Slither Wing",
		'fr-fr': "Rampe-Ailes",
		'es-es': "Reptalada",
		'it-it': "Alirasenti",
		'pt-br': "Asa Rasteira",
		'de-de': "Kriechflügel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Iron Smasher",
			'fr-fr': "Écrasement de Fer",
			'es-es': "Golpe Férreo",
			'it-it': "Ferreodistruzione",
			'pt-br': "Triturador de Ferro",
			'de-de': "Eisenschmetterer"
		},

		effect: {
			'en-us': "If your opponent has any Future Pokémon in play, this attack does 120 more damage.",
			'fr-fr': "Si votre adversaire a au moins un Pokémon Temps futur en jeu, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si tu rival tiene algún Pokémon del futuro en juego, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il tuo avversario ha dei Pokémon Tempo Futuro in gioco, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o seu oponente tiver algum Pokémon Futurista em jogo, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn dein Gegner mindestens 1 Pokémon aus der Zukunft im Spiel hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Smashing Wing",
			'fr-fr': "Aile Fracassante",
			'es-es': "Ala Devastadora",
			'it-it': "Ala Distruttiva",
			'pt-br': "Asa Esmagadora",
			'de-de': "Schmetterflügel"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",


	illustrator: "Shinji Kanda",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780921,
				tcgplayer: 560336
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780921,
				tcgplayer: 560336
			}
		},
	],
}

export default card
