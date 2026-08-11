import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [201],
	set: Set,

	name: {
		'en-us': "Unown V",
		'fr-fr': "Zarbi V",
		'es-es': "Unown V",
		'it-it': "Unown V",
		'pt-br': "Unown V",
		'de-de': "Icognito V"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Shady Stamp",
			'fr-fr': "Coup Louche",
			'es-es': "Impresión Sombría",
			'it-it': "Ombraimpronta",
			'pt-br': "Timbre de Sombra",
			'de-de': "Zwielichtstampfer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Victory Symbol",
			'fr-fr': "Symbole Victorieux",
			'es-es': "Símbolo de Victoria",
			'it-it': "Simbolo di Vittoria",
			'pt-br': "Símbolo da Vitória",
			'de-de': "Siegessymbol"
		},

		effect: {
			'en-us': "If you use this attack when you have only 1 Prize card remaining, you win this game.",
			'fr-fr': "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
			'es-es': "Si usas este ataque cuando te queda solo 1 carta de Premio, ganas esta partida.",
			'it-it': "Se usi questo attacco quando hai solo una carta Premio rimanente, vinci la partita.",
			'pt-br': "Se você usar este ataque quando tiver apenas 1 carta de Prêmio restante, você vencerá esta partida.",
			'de-de': "Wenn du diese Attacke einsetzt und nur 1 verbleibende Preiskarte hast, gewinnst du dieses Spiel."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
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
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682112,
				tcgplayer: 451719
			}
		},
	],
}

export default card
