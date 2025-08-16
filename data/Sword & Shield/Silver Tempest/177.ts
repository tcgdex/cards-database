import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [201],
	set: Set,

	name: {
		en: "Unown V",
		fr: "Zarbi V",
		es: "Unown V",
		it: "Unown V",
		pt: "Unown V",
		de: "Icognito V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Shady Stamp",
			fr: "Coup Louche",
			es: "Impresión Sombría",
			it: "Ombraimpronta",
			pt: "Timbre de Sombra",
			de: "Zwielichtstampfer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Victory Symbol",
			fr: "Symbole Victorieux",
			es: "Símbolo de Victoria",
			it: "Simbolo di Vittoria",
			pt: "Símbolo da Vitória",
			de: "Siegessymbol"
		},

		effect: {
			en: "If you use this attack when you have only 1 Prize card remaining, you win this game.",
			fr: "Si vous utilisez cette attaque alors qu'il ne vous reste qu'une seule carte Récompense, vous gagnez cette partie.",
			es: "Si usas este ataque cuando te queda solo 1 carta de Premio, ganas esta partida.",
			it: "Se usi questo attacco quando hai solo una carta Premio rimanente, vinci la partita.",
			pt: "Se você usar este ataque quando tiver apenas 1 carta de Prêmio restante, você vencerá esta partida.",
			de: "Wenn du diese Attacke einsetzt und nur 1 verbleibende Preiskarte hast, gewinnst du dieses Spiel."
		}
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 682112,
		tcgplayer: 451825
	}
}

export default card