import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [785],
	set: Set,

	name: {
		'en-us': "Tapu Koko VMAX",
		'fr-fr': "Tokorico VMAX",
		'es-es': "Tapu Koko VMAX",
		'it-it': "Tapu Koko VMAX",
		'pt-br': "Tapu Koko VMAX",
		'de-de': "Kapu-Riki VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Max Shock",
			'fr-fr': "Éclairomax",
			'es-es': "Maxidescarga",
			'it-it': "Dynashock",
			'pt-br': "Eletrochoque Max",
			'de-de': "Dyna-Schock"
		},

		damage: 180,

		effect: {
			'en-us': "If you have more Prize cards remaining than your opponent, their Active Pokémon is now Paralyzed.",
			'fr-fr': "S'il vous reste plus de cartes Récompense qu'à votre adversaire, son Pokémon Actif est maintenant Paralysé.",
			'es-es': "Si te quedan más cartas de Premio que a tu rival, su Pokémon Activo pasa a estar Paralizado.",
			'it-it': "Se hai più carte Premio rimanenti del tuo avversario, il suo Pokémon attivo viene paralizzato.",
			'pt-br': "Se você tiver mais cartas de Prêmio restantes do que seu oponente, o Pokémon Ativo dele(a) ficará Paralisado.",
			'de-de': "Wenn du mehr verbleibende Preiskarten hast als dein Gegner, ist sein Aktives Pokémon jetzt paralysiert."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,


	stage: "VMAX",
	illustrator: "PLANETA Tsuji",

	evolveFrom: {
		'en-us': "Tapu Koko V",
		'fr-fr': "Tokorico-V",
		'es-es': "Tapu Koko V",
		'it-it': "Tapu Koko-V",
		'pt-br': "Tapu Koko V",
		'de-de': "Kapu-Riki-V"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 546621,
				tcgplayer: 234083
			}
		},
	],
}

export default card
