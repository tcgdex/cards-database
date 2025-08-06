import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko VMAX",
		fr: "Tokorico VMAX",
		es: "Tapu Koko VMAX",
		it: "Tapu Koko VMAX",
		pt: "Tapu Koko VMAX",
		de: "Kapu-Riki VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	attacks: [{
		name: {
			en: "Max Shock",
			fr: "Éclairomax",
			es: "Maxidescarga",
			it: "Dynashock",
			pt: "Eletrochoque Max",
			de: "Dyna-Schock"
		},

		damage: 180,

		effect: {
			en: "If you have more Prize cards remaining than your opponent, their Active Pokémon is now Paralyzed.",
			fr: "S'il vous reste plus de cartes Récompense qu'à votre adversaire, son Pokémon Actif est maintenant Paralysé.",
			es: "Si te quedan más cartas de Premio que a tu rival, su Pokémon Activo pasa a estar Paralizado.",
			it: "Se hai più carte Premio rimanenti del tuo avversario, il suo Pokémon attivo viene paralizzato.",
			pt: "Se você tiver mais cartas de Prêmio restantes do que seu oponente, o Pokémon Ativo dele(a) ficará Paralisado.",
			de: "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, ist sein Aktives Pokémon jetzt paralysiert."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		en: "Tapu Koko V",
		fr: "Tokorico-V",
		es: "Tapu Koko V",
		it: "Tapu Koko-V",
		pt: "Tapu Koko V",
		de: "Kapu-Riki-V"
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 545366,
		tcgplayer: 234083
	}
}

export default card
