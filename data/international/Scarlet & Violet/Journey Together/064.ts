import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		'en-us': "N's Sigilyph",
		'fr-fr': "Cryptéro de N",
		'es-es': "Sigilyph de N",
		'de-de': "Ns Symvolara",
		'it-it': "Sigilyph di N",
		'pt-br': "Sigilyph do N",
		'es-mx': "Sigilyph de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'de-de': "Psychosphäre",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Victory Symbol",
			'fr-fr': "Symbole Victorieux",
			'es-es': "Símbolo de Victoria",
			'de-de': "Siegessymbol",
			'it-it': "Simbolo di Vittoria",
			'pt-br': "Símbolo da Vitória",
			'es-mx': "Símbolo de Victoria"
		},

		effect: {
			'en-us': "If you use this attack when you have exactly 1 Prize card remaining, you win this game.",
			'fr-fr': "Si vous utilisez cette attaque alors qu'il vous reste exactement une carte Récompense, vous gagnez cette partie.",
			'es-es': "Si usas este ataque cuando te queda exactamente una carta de Premio, ganas esta partida.",
			'de-de': "Wenn du diese Attacke einsetzt und genau 1 verbleibende Preiskarte hast, gewinnst du dieses Spiel.",
			'it-it': "Se usi questo attacco quando hai esattamente una carta Premio rimanente, vinci la partita.",
			'pt-br': "Se você usar este ataque quando tiver exatamente 1 carta de Prêmio restante, você vencerá esta partida.",
			'es-mx': "Si usas este ataque cuando te queda exactamente 1 carta de Premio, ganas esta partida."
		}
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
	regulationMark: "I",
	illustrator: "Shiburingaru",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817216,
				tcgplayer: 623491
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817216,
				tcgplayer: 623491
			}
		},
	],
}

export default card
