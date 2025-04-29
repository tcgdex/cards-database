import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Sigilyph",
		fr: "Cryptéro de N",
		es: "Sigilyph de N",
		de: "Ns Symvolara",
		it: "Sigilyph di N",
		pt: "Sigilyph do N",
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
			en: "Psychic Sphere",
			fr: "Sphère Psy",
			es: "Esfera Psíquica",
			de: "Psychosphäre",
			it: "Psicosfera",
			pt: "Esfera Psíquica",
			'es-mx': "Esfera Psíquica"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Victory Symbol",
			fr: "Symbole Victorieux",
			es: "Símbolo de Victoria",
			de: "Siegessymbol",
			it: "Simbolo di Vittoria",
			pt: "Símbolo da Vitória",
			'es-mx': "Símbolo de Victoria"
		},

		effect: {
			en: "If you use this attack when you have exactly 1 Prize card remaining, you win this game.",
			fr: "Si vous utilisez cette attaque alors qu'il vous reste exactement une carte Récompense, vous gagnez cette partie.",
			es: "Si usas este ataque cuando te queda exactamente una carta de Premio, ganas esta partida.",
			de: "Wenn du diese Attacke einsetzt und genau 1 verbleibende Preiskarte hast, gewinnst du dieses Spiel.",
			it: "Se usi questo attacco quando hai esattamente una carta Premio rimanente, vinci la partita.",
			pt: "Se você usar este ataque quando tiver exatamente 1 carta de Prêmio restante, você vencerá esta partida.",
			'es-mx': "Si usas este ataque cuando te queda exactamente 1 carta de Premio, ganas esta partida."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
